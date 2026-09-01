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

  async calculateOrderTotals(
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

  async createOrder(data: CreateOrderBody, userId?: string) {
    const {
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
    const orderTotals = await this.calculateOrderTotals(
      orderItems,
      shippingMethod.price,
      discountAmount,
    );

    // 6. Create order.
    const order = await prisma.order.create({
      data: {
        status: 'PENDING',

        subTotal: orderTotals.subTotal,
        shipping: shippingMethod.price,
        total: orderTotals.total,

        // Customer information
        customerName: `${firstName} ${lastName}`,
        customerEmail: contact,
        customerPhone: phone,

        // Billing address
        billingSameAsShipping: Boolean(billingSameAsShipping),
        billingAddress: !billingSameAsShipping ? billingAddress : null,
        billingCity: !billingSameAsShipping ? billingCity : null,
        billingGovernorate: !billingSameAsShipping ? billingGovernorate : null,
        billingCountry: !billingSameAsShipping ? billingCountry : null,
        billingPostalCode: !billingSameAsShipping ? billingPostalCode : null,

        // Optional registered account
        userId: userId ? userId : null,

        // Original saved address used for this order
        //   addressId String?

        // Discount reference
        discountId: discount?.id ?? null,

        // Shipping address snapshot
        shippingAddress: address,
        shippingCity: city,
        shippingGovernorate: governorate,
        shippingCountry: country,
        shippingPostalCode: postalCode,

        // Shipping method snapshot
        shippingMethodId: shippingMethod.id,
        shippingMethodName: shippingMethod.name,
        shippingMethodPrice: shippingMethod.price,
      },
    });
    // Next:
    // 7. Handle payment method.

    return {
      // Will be editted
      productVariants,
      orderItems,
      shippingMethod,
      discount,
    };
  },
};
