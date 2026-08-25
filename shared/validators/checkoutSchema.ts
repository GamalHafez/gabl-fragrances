import { z } from 'zod';

const egyptianPhoneSchema = z
  .string()
  .trim()
  .regex(/^01[0125][0-9]{8}$/, 'Enter a valid Egyptian mobile number');

const contactSchema = {
  contact: z
    .string()
    .trim()
    .min(1, 'Email or mobile phone number is required')
    .refine(
      (value) =>
        z.string().email().safeParse(value).success ||
        egyptianPhoneSchema.safeParse(value).success,
      {
        message: 'Enter a valid email or mobile phone number',
      },
    ),
};

const deliverySchema = {
  country: z.literal('Egypt'),

  firstName: z.string().trim().min(1, 'First name is required'),
  lastName: z.string().trim().min(1, 'Last name is required'),

  address: z.string().trim().min(1, 'Address is required'),

  city: z.string().trim().min(1, 'City is required'),
  governorate: z.string().trim().min(1, 'Governorate is required'),
  postalCode: z.string().trim().optional(),

  phone: egyptianPhoneSchema,
};

export const checkoutSchema = z.object({
  ...contactSchema,
  ...deliverySchema,

  saveInformation: z.boolean().default(false),

  // Later:
  // ...shippingSchema,
  // ...addressSchema,
  // ...paymentSchema,
});
