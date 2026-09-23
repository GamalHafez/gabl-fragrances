import { prisma } from '@/config/db.js';

export const discountsService = {
  async checkDiscountCode(code: string) {
    return prisma.discount.findUnique({
      where: { code },
      select: {
        code: true,
        type: true,
        value: true,
        isActive: true,
      },
    });
  },
};
