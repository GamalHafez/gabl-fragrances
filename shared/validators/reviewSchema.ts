import { z } from 'zod';

export const reviewSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters.')
    .max(100, 'Name cannot exceed 100 characters.'),

  rating: z
    .number()
    .int('Rating must be a whole number.')
    .min(1, 'Please select a rating.')
    .max(5),

  review: z
    .string()
    .trim()
    .min(10, 'Review must be at least 10 characters.')
    .max(1000, 'Review is too long.'),

  imageUrl: z.url('Please provide a valid image URL.').optional().nullable(),
});

export const createReviewSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters.')
    .max(100, 'Name cannot exceed 100 characters.'),

  rating: z
    .number()
    .int('Rating must be a whole number.')
    .min(1, 'Please select a rating.')
    .max(5),

  review: z
    .string()
    .trim()
    .min(10, 'Review must be at least 10 characters.')
    .max(1000, 'Review is too long.'),

  imageUrl: z.url('Please provide a valid image URL.').optional().nullable(),
});

export const approvedReviewsQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(50).default(10),
});
