import { z } from 'zod';

export const signupSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, { message: 'Name must be at least 2 characters long.' })
      .max(50, { message: 'Name cannot exceed 50 characters.' }),

    email: z
      .email({
        message: 'Please provide a valid email address.',
      })
      .trim()
      .toLowerCase(),

    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .regex(/[a-z]/, {
        message: 'Password must contain at least one lowercase letter',
      })
      .regex(/[A-Z]/, {
        message: 'Password must contain at least one uppercase letter',
      })
      .regex(/\d/, { message: 'Password must contain at least one number' })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'Password must contain at least one special character',
      }),

    confirmPassword: z.string(),

    address: z
      .string()
      .trim()
      .min(5, { message: 'Address must be at least 5 characters long.' })
      .max(255, { message: 'Address cannot exceed 255 characters.' }),

    governorate: z
      .string()
      .trim()
      .min(1, { message: 'Please select a governorate.' })
      .max(50),

    city: z
      .string()
      .trim()
      .min(2, { message: 'City must be at least 2 characters long.' })
      .max(50),

    country: z.literal('Egypt'),

    postalCode: z.string().trim().max(20).optional(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
        path: ['confirmPassword'],
      });
    }
  });

export const loginSchema = z.object({
  email: z
    .email({
      message: 'Please provide a valid email address.',
    })
    .trim()
    .toLowerCase(),
  password: z.string().min(1, { message: 'Password is required' }),
});

export type RegisterBody = z.infer<typeof signupSchema>;
export type LoginBody = z.infer<typeof loginSchema>;
