import type { checkoutSchema } from '@shared/validators/checkoutSchema';
import type z from 'zod';

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;
