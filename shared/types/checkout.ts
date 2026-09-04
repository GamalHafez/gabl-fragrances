import type { z } from 'zod';
import { checkoutSchema } from '../validators/checkoutSchema';
import type {
  OrderStatus,
  PaymentMethod,
  PaymentStatus,
} from '../../server/src/generated/prisma/enums';

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

  subTotal: string;
  shipping: string;
  total: string;

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
