import { z } from 'zod';

export const createShippingMethodSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Shipping method name must be at least 2 characters long.')
    .max(150, 'Shipping method name cannot exceed 150 characters.'),

  description: z
    .string()
    .trim()
    .min(10, 'Description must be at least 10 characters long.'),

  price: z
    .number()
    .positive('Price must be greater than 0.')
    .max(99999999.99, 'Price is too high.')
    .refine(
      (value) => Number.isInteger(value * 100),
      'Price can have at most 2 decimal places.',
    ),
});
