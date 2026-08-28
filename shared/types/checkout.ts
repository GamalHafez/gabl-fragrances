import type { z } from 'zod';
import { checkoutSchema } from '@shared/validators/checkoutSchema';

export type CheckoutFormValues = z.input<typeof checkoutSchema>;

export type CheckoutFormOutput = z.output<typeof checkoutSchema>;

export type ShippingMethodType = {
  id: string;
  name: string;
  description: string;
  price: string;
};

export type PaymentMethodType = {
  id: string;
  name: string;
  note: string;
};
