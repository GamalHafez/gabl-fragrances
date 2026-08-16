import { prisma } from '@/config/db.js';
import { AppError } from '@/utils/response.js';
import z from 'zod';
import { createReviewSchema } from '@shared/validators/reviewSchema.js';

type CreateReviewBody = z.infer<typeof createReviewSchema>;

export const productReviewsService = {
  async getReviews(productId: string) {
    return await prisma.review.findMany({
      where: { isApproved: true, productId },

      select: {
        id: true,
        name: true,
        review: true,
        rating: true,
        imageUrl: true, // If Exists
        createdAt: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
  },

  async createReview(
    productId: string,
    userId: string | null,
    data: CreateReviewBody,
  ) {
    return await prisma.review.create({
      data: { ...data, productId, userId, isApproved: false },
      select: {
        id: true,
        name: true,
        review: true,
        rating: true,
        imageUrl: true, // If Exists
        createdAt: true,
      },
    });
  },
};
