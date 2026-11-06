import { z } from 'zod';

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
