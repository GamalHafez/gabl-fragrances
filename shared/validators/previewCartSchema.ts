import { z } from 'zod';

export const previewCartSchema = z.array(
  z.object({
    variantId: z.string().trim().min(1, 'Variant ID is required.'),

    quantity: z
      .number()
      .int()
      .positive('Quantity must be greater than 0.')
      .max(100, 'Quantity cannot exceed 100.'),
  }),
);
