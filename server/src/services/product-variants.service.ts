import { prisma } from '@/config/db.js';
import { AppError } from '@/utils/response.js';
import {
  createVariantSchema,
  restockSchema,
} from '@shared/validators/productsSchema.js';
import z, { check } from 'zod';
import { productsService } from './products.service.js';

type CreateVariantBody = z.infer<typeof createVariantSchema>;
type RestockBody = z.infer<typeof restockSchema>;

export const productVariantsService = {
  async productVariantExists(productId: string, sizeML: number) {
    return await prisma.productVariant.findUnique({
      where: {
        productId_sizeML: {
          productId,
          sizeML,
        },
      },
    });
  },

  async createVariant(productSlug: string, data: CreateVariantBody) {
    const product = await productsService.findProduct({ slug: productSlug });

    if (!product) {
      throw new AppError(404, 'Product not found');
    }

    const existingVariant = await this.productVariantExists(
      product.id,
      data.sizeML,
    );

    if (existingVariant) {
      throw new AppError(
        409,
        `This product already has a ${data.sizeML}ml variant`,
      );
    }

    return await prisma.productVariant.create({
      data: { ...data, productId: product.id },
    });
  },

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
