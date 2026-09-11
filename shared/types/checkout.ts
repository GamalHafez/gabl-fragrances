import type { z } from 'zod';
import { checkoutSchema } from '../validators/checkoutSchema';
import type {
  OrderStatus,
  PaymentMethod,
  PaymentStatus,
} from '../../server/src/generated/prisma/enums';
import type { createOrderSchema } from '../validators/ordersSchemas';

export type CheckoutFormValues = z.input<typeof checkoutSchema>;

export type CheckoutFormOutput = z.output<typeof checkoutSchema>;

export type ShippingMethodType = {
  id: string;
  name: string;
  description: string;
  price: string;
};

export type PaymentMethodType = {
  id: 'CARD' | 'CASH_ON_DELIVERY';
  name: string;
  note: string;
};

export type BillingAddressOptionType = {
  id: string;
  value: boolean;
  label: string;
};

export type OrderType = {
  id: string;
  orderNumber: number;
  status: OrderStatus;
  customerName: string;
  customerContact: string;
  customerPhone: string;

  subTotal: string;
  shipping: string;
  discountAmount: string | null;
  total: string;

  shippingAddress: string;
  shippingCity: string;
  shippingGovernorate: string;
  shippingCountry: string;
  shippingPhone: string | null;
  shippingMethodName: string | null;
  createdAt: string;

  items: {
    productName: string;
    sizeML: number;
    quantity: number;
    unitPrice: string;
  }[];

  payments: {
    method: PaymentMethod;
    status: PaymentStatus;
    amount: string;
  }[];
};

export type CreateOrderInput = z.infer<typeof createOrderSchema>;

export type GuestOrderSummary = {
  id: string;
  orderNumber: number;
  createdAt: string;
  total: string;
};

export type CheckoutDefaults = {
  email: string;
  name: string;
  address: {
    address: string;
    city: string;
    governorate: string;
    country: string;
    postalCode: string | null;
  } | null;
};
