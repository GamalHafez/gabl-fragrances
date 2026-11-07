import { z } from 'zod';

// Update Personal Info Schema:
export const updatePersonalInfoSchema = z.object({
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
});

export type UpdatePersonalInfoRequest = z.infer<
  typeof updatePersonalInfoSchema
>;

// Change Password Schema:
export const changePasswordSchema = z
  .object({
    password: z.string().min(1, {
      message: 'Current password is required',
    }),

    newPassword: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .regex(/[a-z]/, {
        message: 'Password must contain at least one lowercase letter',
      })
      .regex(/[A-Z]/, {
        message: 'Password must contain at least one uppercase letter',
      })
      .regex(/\d/, {
        message: 'Password must contain at least one number',
      })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'Password must contain at least one special character',
      }),

    confirmPassword: z.string().min(1, {
      message: 'Please confirm your new password',
    }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type ChangePasswordRequest = z.infer<typeof changePasswordSchema>;
