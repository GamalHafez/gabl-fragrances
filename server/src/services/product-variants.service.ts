import { prisma } from '@/config/db.js';
import { Prisma } from '@/generated/prisma/client.js';
import { AppError } from '@/utils/response.js';
import { restockSchema } from '@shared/validators/productsSchema.js';
import z from 'zod';

type RestockBody = z.infer<typeof restockSchema>;

export const productVariantsService = {
  async validateVariant(productSlug: string, variantId: string) {
    const variant = await prisma.productVariant.findFirst({
      where: {
        id: variantId,
        product: {
          slug: productSlug,
          isActive: true,
        },
      },
    });

    if (!variant) {
      throw new AppError(404, 'Product variant not found');
    }

    return variant;
  },

  async restock(productSlug: string, variantId: string, data: RestockBody) {
    await this.validateVariant(productSlug, variantId);

    return prisma.$transaction(async (tx) => {
      const variant = await tx.productVariant.update({
        where: { id: variantId },
        data: {
          stock: {
            increment: data.quantity,
          },
        },
      });

      await tx.inventoryTransaction.create({
        data: {
          quantity: data.quantity,
          type: 'RESTOCK',
          reason: data.reason,
          productVariantId: variantId,
        },
      });

      return variant;
    });
  },
};
