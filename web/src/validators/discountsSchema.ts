import { z } from 'zod';

export const discountCodeSchema = z.object({
  code: z
    .string()
    .trim()
    .min(1, 'Discount code is required')
    .max(50, 'Discount code is too long')
    .transform((value) => value.toUpperCase()),
});

export type DiscountCodeRequest = z.infer<typeof discountCodeSchema>;
