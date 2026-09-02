import type { z } from 'zod';
import { checkoutSchema } from '../validators/checkoutSchema';

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
