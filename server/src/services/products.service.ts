import { prisma } from '@/config/db.js';

export const productsService = {
  async getProducts() {
    return prisma.product.findMany({
      orderBy: { createdAt: 'asc' },
      select: {
        id: true,
        slug: true,
        name: true,
        gender: true,
        inspiredBy: true,
        isBestSeller: true,

        categories: true,

        images: {
          select: {
            id: true,
            url: true,
            alt: true,
          },
        },

        variants: {
          select: {
            id: true,
            sizeML: true,
            price: true,
            stock: true,
          },
        },
      },
    });
  },
};
