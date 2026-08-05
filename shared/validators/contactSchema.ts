import { z } from 'zod';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters.')
    .max(50, 'Name cannot exceed 50 characters.'),

  email: z
    .email('Please enter a valid email address.')
    .trim()
    .max(254, 'Email is too long.'),

  phone: z
    .string()
    .trim()
    .min(7, 'Phone number is too short.')
    .max(20, 'Phone number is too long.')
    .regex(phoneRegex, 'Please enter a valid phone number.'),

  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters.')
    .max(2000, 'Message is too long.'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
