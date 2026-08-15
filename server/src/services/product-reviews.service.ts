import { prisma } from '@/config/db.js';
import { AppError } from '@/utils/response.js';
import {} from '@shared/validators/productsSchema.js';
import z from 'zod';
import { Product } from '@shared/types/index.js';

// type CreateVariantBody = z.infer<typeof createVariantSchema>;

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
};
