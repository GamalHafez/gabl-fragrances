import { z } from 'zod';

export const previewCartSchema = z.object({
  items: z.array(
    z.object({
      productVariantId: z
        .string()
        .trim()
        .min(1, 'Product Variant ID is required.'),

      quantity: z
        .number()
        .int()
        .positive('Quantity must be greater than 0.')
        .max(100, 'Quantity cannot exceed 100.'),
    }),
  ),

  discount: z
    .object({
      code: z.string(),
      type: z.enum(['FIXED', 'PERCENTAGE']),
      value: z.string(),
    })
    .nullable()
    .optional(),
});
