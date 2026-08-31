import z from 'zod';
import { checkoutObjectSchema, validateBillingAddress } from './checkoutSchema';

const orderItemSchema = z.object({
  productVariantId: z.string().trim().min(1, 'Variant ID is required.'),

  quantity: z
    .number()
    .int('Quantity must be a whole number.')
    .positive('Quantity must be greater than 0.')
    .max(100, 'Quantity cannot exceed 100.'),
});

export const createOrderSchema = checkoutObjectSchema
  .extend({
    items: z.array(orderItemSchema).min(1, 'Your cart cannot be empty.'),

    discountCode: z
      .string()
      .trim()
      .min(1, 'Discount code cannot be empty.')
      .max(50, 'Discount code cannot exceed 50 characters.')
      .optional(),
  })
  .superRefine((data, ctx) => {
    validateBillingAddress(data, ctx);

    const variantIds = data.items.map((item) => item.productVariantId);

    if (new Set(variantIds).size !== variantIds.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Duplicate product variants are not allowed.',
        path: ['items'],
      });
    }
  });
