import { z } from 'zod';

const contactSchema = {
  contact: z
    .string()
    .trim()
    .min(1, 'Email or mobile phone number is required')
    .refine(
      (value) =>
        z.string().email().safeParse(value).success ||
        /^01[0125][0-9]{8}$/.test(value),
      {
        message: 'Enter a valid email or mobile phone number',
      },
    ),
};

export const checkoutSchema = z.object({
  ...contactSchema,

  // Later:
  // ...shippingSchema,
  // ...addressSchema,
  // ...paymentSchema,
});
