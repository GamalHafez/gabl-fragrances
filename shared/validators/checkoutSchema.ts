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

const billingAddressSchema = {
  billingAddress: z.string().trim().optional(),
  billingCity: z.string().trim().optional(),
  billingGovernorate: z.string().trim().optional(),
  billingCountry: z.literal('Egypt').optional(),
  billingPostalCode: z.string().trim().optional(),
  billingPhone: egyptianPhoneSchema.or(z.literal('')),
};

export const checkoutSchema = z
  .object({
    ...contactSchema,
    ...deliverySchema,

    saveInformation: z.boolean().default(false),

    shippingMethodId: z
      .string()
      .trim()
      .min(1, 'Please select a shipping method'),

    paymentMethodId: z.enum(['card', 'cod']),

    billingSameAsShipping: z.boolean().default(true),

    ...billingAddressSchema,
  })
  .superRefine((data, ctx) => {
    if (data.billingSameAsShipping) return; // nothing to check

    const requiredFields = [
      { key: 'billingAddress', value: data.billingAddress },
      { key: 'billingCity', value: data.billingCity },
      { key: 'billingGovernorate', value: data.billingGovernorate },
      { key: 'billingCountry', value: data.billingCountry },
      { key: 'billingPhone', value: data.billingPhone },
    ] as const;

    for (const { key, value } of requiredFields) {
      if (!value || value.trim() === '') {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'This field is required',
          path: [key],
        });
      }
    }
  });
