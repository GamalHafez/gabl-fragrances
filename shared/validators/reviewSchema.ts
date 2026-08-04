import { z } from 'zod';

export const reviewSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters.')
    .max(50, 'Name cannot exceed 50 characters.'),

  rating: z.number().min(1, 'Please select a rating.').max(5),

  comment: z
    .string()
    .min(10, 'Review must be at least 10 characters.')
    .max(1000, 'Review is too long.'),
});

export type ReviewFormData = z.infer<typeof reviewSchema>;
