import { AppError } from '@/utils/response.js';
import { prisma } from '@/config/db.js';
import z from 'zod';
import { createOrderSchema } from '@shared/validators/ordersSchemas.js';
import { Prisma } from '@/generated/prisma/client.js';
import { Decimal } from '@prisma/client/runtime/client';

type CreateOrderBody = z.infer<typeof createOrderSchema>;

type ProductVariantData = Prisma.ProductVariantGetPayload<{
  select: {
    id: true;
    price: true;
    stock: true;
    sizeML: true;
    product: {
      select: {
        name: true;
      };
    };
  };
}>;

type OrderItem = {
  productVariantId: string;
  quantity: number;
  unitPrice: Decimal;
  productName: string;
  sizeML: number;
};

export const ordersService = {
  async getProductsData(
    items: CreateOrderBody['items'],
  ): Promise<ProductVariantData[]> {
    const variantIds = items.map((item) => item.productVariantId);

    const productVariants = await prisma.productVariant.findMany({
      where: {
        id: { in: variantIds },
        isActive: true,
      },
      select: {
        id: true,
        price: true,
        stock: true,
        sizeML: true,
        product: {
          select: { name: true },
        },
      },
    });

    const foundIds = new Set(productVariants.map((variant) => variant.id));
    const unavailableIds = variantIds.filter((id) => !foundIds.has(id));

    if (unavailableIds.length > 0) {
      throw new AppError(
        400,
        'One or more products in your cart are no longer available.',
      );
    }

    return productVariants;
  },

  checkInsufficientStock(
    items: CreateOrderBody['items'],
    productVariants: ProductVariantData[],
  ) {
    const variantsById = new Map(
      productVariants.map((variant) => [variant.id, variant]),
    );

    const insufficientStock: string[] = [];

    const orderItems = items.map((item) => {
      const variant = variantsById.get(item.productVariantId)!;

      if (item.quantity > variant.stock) {
        insufficientStock.push(variant.product.name);
      }

      return {
        productVariantId: variant.id,
        quantity: item.quantity,
        unitPrice: variant.price,
        productName: variant.product.name,
        sizeML: variant.sizeML,
      };
    });

    if (insufficientStock.length > 0) {
      throw new AppError(
        400,
        `Not enough stock for: ${insufficientStock.join(', ')}.`,
      );
    }

    return orderItems;
  },

  async getShippingMethod(
    shippingMethodId: CreateOrderBody['shippingMethodId'],
  ) {
    const shippingMethod = await prisma.shippingMethod.findUnique({
      where: { isActive: true, id: shippingMethodId },
      select: { id: true, name: true, price: true },
    });

    if (!shippingMethod) {
      throw new AppError(
        400,
        'The selected shipping method is no longer available.',
      );
    }

    return shippingMethod;
  },

  async getDiscount(
    discountCode: CreateOrderBody['discountCode'],
    subTotal: Decimal,
  ) {
    if (!discountCode) {
      return { discount: null, discountAmount: new Decimal(0) };
    }

    const discount = await prisma.discount.findUnique({
      where: { code: discountCode },
      select: { id: true, type: true, value: true, isActive: true },
    });

    if (!discount || !discount.isActive) {
      throw new AppError(
        400,
        'The discount code you entered is invalid or has expired.',
      );
    }

    const discountAmount =
      discount.type === 'PERCENTAGE'
        ? subTotal.mul(discount.value).div(100)
        : discount.value;

    const cappedAmount = Decimal.min(discountAmount, subTotal);

    return { discount, discountAmount: cappedAmount };
  },

  calculateOrderTotals(
    orderItems: OrderItem[],
    shippingPrice: Decimal,
    discountAmount: Decimal,
  ) {
    const subTotal = orderItems.reduce(
      (acc, item) => acc.plus(item.unitPrice.mul(item.quantity)),
      new Decimal(0),
    );

    const total = subTotal.plus(shippingPrice).minus(discountAmount);

    return { subTotal, shippingPrice, discountAmount, total };
  },

  async createAddressSnapshot(
    tx: Prisma.TransactionClient,
    userId: string,
    fields: {
      address: string;
      city: string;
      governorate: string;
      country: string;
      postalCode?: string | null;
    },
  ) {
    const { address, city, governorate, country } = fields;

    // Unset any existing default so there's only ever one per user.
    await tx.address.updateMany({
      where: { userId, isDefault: true },
      data: { isDefault: false },
    });

    return tx.address.create({
      data: {
        userId,
        address,
        country,
        city,
        governorate,
        postalCode: fields.postalCode ?? null,
      },
      select: { id: true },
    });
  },

  async decrementStockAndLogTransactions(
    tx: Prisma.TransactionClient,
    orderId: string,
    orderItems: OrderItem[],
  ) {
    for (const item of orderItems) {
      const result = await tx.productVariant.updateMany({
        where: { id: item.productVariantId, stock: { gte: item.quantity } },
        data: { stock: { decrement: item.quantity } },
      });

      // Someone else bought the stock between our earlier check and now.
      if (result.count === 0) {
        throw new AppError(
          409,
          `Not enough stock for ${item.productName} — it just sold out. Please update your cart.`,
        );
      }

      await tx.inventoryTransaction.create({
        data: {
          productVariantId: item.productVariantId,
          orderId,
          quantity: item.quantity,
          type: 'SALE',
          reason: `Order ${orderId}`,
        },
      });
    }
  },

  async createPayment(
    tx: Prisma.TransactionClient,
    orderId: string,
    amount: Decimal,
    paymentMethod: 'CARD' | 'CASH_ON_DELIVERY',
  ) {
    return tx.payment.create({
      data: {
        orderId,
        amount,
        currency: 'EGP',
        status: 'PENDING',
        method: paymentMethod,
      },
    });
  },

  async createOrder(data: CreateOrderBody, userId?: string) {
    const {
      saveInformation,
      items,
      shippingMethodId,
      discountCode,
      address,
      city,
      country,
      governorate,
      postalCode,
      firstName,
      lastName,
      contact,
      phone,
      billingSameAsShipping,
      billingAddress,
      billingCity,
      billingGovernorate,
      billingCountry,
      billingPostalCode,
      billingPhone,
      paymentMethod,
    } = data;

    // 1. Resolve product variants from the database.
    const productVariants = await this.getProductsData(items);

    // 2. Validate stock and prepare order item snapshots.
    const orderItems = this.checkInsufficientStock(items, productVariants);

    // 3. Resolve shipping method.
    const shippingMethod = await this.getShippingMethod(shippingMethodId);

    // 4. Calculate subtotal + resolve discount against it.
    const subTotal = orderItems.reduce(
      (acc, item) => acc.plus(item.unitPrice.mul(item.quantity)),
      new Decimal(0),
    );
    const { discount, discountAmount } = await this.getDiscount(
      discountCode,
      subTotal,
    );

    // 5. Calculate totals.
    const orderTotals = this.calculateOrderTotals(
      orderItems,
      shippingMethod.price,
      discountAmount,
    );

    const isCard = paymentMethod === 'CARD';

    // 6. Create order.
    const order = await prisma.$transaction(async (tx) => {
      let addressId: string | null = null;

      if (userId && saveInformation) {
        const savedAddress = await this.createAddressSnapshot(tx, userId, {
          address,
          city,
          governorate,
          country,
          postalCode,
        });
        addressId = savedAddress.id;
      }

      const order = await tx.order.create({
        data: {
          status: isCard ? 'PROCESSING' : 'PENDING',

          subTotal: orderTotals.subTotal,
          shipping: shippingMethod.price,
          total: orderTotals.total,

          customerName: `${firstName} ${lastName}`,
          customerContact: contact,
          customerPhone: phone,

          billingSameAsShipping: Boolean(billingSameAsShipping),
          billingAddress: !billingSameAsShipping ? billingAddress : null,
          billingCity: !billingSameAsShipping ? billingCity : null,
          billingGovernorate: !billingSameAsShipping
            ? billingGovernorate
            : null,
          billingCountry: !billingSameAsShipping ? billingCountry : null,
          billingPostalCode: !billingSameAsShipping ? billingPostalCode : null,
          billingPhone: !billingSameAsShipping ? billingPhone : null,

          userId: userId ?? null,
          addressId,
          discountId: discount?.id ?? null,

          shippingAddress: address,
          shippingCity: city,
          shippingGovernorate: governorate,
          shippingCountry: country,
          shippingPostalCode: postalCode,

          shippingMethodId: shippingMethod.id,
          shippingMethodName: shippingMethod.name,
          shippingMethodPrice: shippingMethod.price,
        },
      });

      await tx.orderItem.createMany({
        data: orderItems.map((item) => ({
          quantity: item.quantity,
          unitPrice: item.unitPrice,
          orderId: order.id,
          productVariantId: item.productVariantId,

          productName: item.productName,
          sizeML: item.sizeML,
        })),
      });

      if (!isCard) {
        await this.decrementStockAndLogTransactions(tx, order.id, orderItems);
      }
      await this.createPayment(tx, order.id, orderTotals.total, paymentMethod);

      return order;
    });

    return {
      success: true,
      order,
    };
  },
};
