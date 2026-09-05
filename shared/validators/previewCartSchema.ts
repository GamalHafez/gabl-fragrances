import { z } from 'zod';

export const previewCartSchema = z.array(
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
);
