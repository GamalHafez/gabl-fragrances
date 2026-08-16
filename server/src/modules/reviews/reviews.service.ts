import { prisma } from '@/config/db.js';

export const reviewsService = {
  async getApprovedReviews(limit: number) {
    return await prisma.review.findMany({
      where: {
        isApproved: true,
      },
      take: limit,
      select: {
        id: true,
        name: true,
        review: true,
        rating: true,
        imageUrl: true,
        product: {
          select: {
            slug: true,
            name: true,
          },
        },
        createdAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  },
};
