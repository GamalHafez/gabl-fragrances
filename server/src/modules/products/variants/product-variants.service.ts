import { prisma } from '@/config/db.js';
import { AppError } from '@/utils/response.js';
import {
  createVariantSchema,
  restockSchema,
  updateVariantSchema,
} from '@shared/validators/productsSchema.js';
import z from 'zod';
import { productsService } from '../products.service.js';
import { Product } from '@shared/types/index.js';

type CreateVariantBody = z.infer<typeof createVariantSchema>;
type RestockBody = z.infer<typeof restockSchema>;
type UpdateVariantBody = z.infer<typeof updateVariantSchema>;

export const productVariantsService = {
  async getVariants(productId: string) {
    return await prisma.productVariant.findMany({
      where: { isActive: true, productId },

      select: {
        id: true,
        sizeML: true,
        price: true,
        stock: true,
        isActive: true,
        label: true,
      },
      orderBy: {
        sizeML: 'asc',
      },
    });
  },

  async productVariantExists(
    productId: string,
    sizeML: number,
    label?: string,
  ) {
    return await prisma.productVariant.findFirst({
      where: {
        productId,
        sizeML,
        label: label ?? undefined,
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
      data.label ?? undefined,
    );

    if (existingVariant) {
      throw new AppError(
        409,
        data.label
          ? `This product already has a ${data.label} ${data.sizeML}ml variant`
          : `This product already has a ${data.sizeML}ml variant`,
      );
    }

    return await prisma.productVariant.create({
      data: { ...data, productId: product.id },
    });
  },

  async validateVariant(productSlug: string, variantId: string) {
    const variant = await prisma.productVariant.findFirst({
      where: {
        isActive: true,
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

  async updateVariant(
    product: Product,
    variantId: string,
    data: UpdateVariantBody,
  ) {
    const variant = await this.validateVariant(product.slug, variantId);

    const sizeML = data.sizeML ?? variant.sizeML;
    const label = data.label !== undefined ? data.label : variant.label;

    const existingVariant = await this.productVariantExists(
      product.id,
      sizeML,
      label ?? undefined,
    );

    if (existingVariant && existingVariant.id !== variantId) {
      throw new AppError(
        409,
        label
          ? `This product already has a ${label} ${sizeML}ml variant`
          : `This product already has a ${sizeML}ml variant`,
      );
    }

    return prisma.productVariant.update({
      where: {
        id: variantId,
        productId: product.id,
      },
      data,
    });
  },

  async deleteVariant(product: Product, variantId: string) {
    await this.validateVariant(product.slug, variantId);

    // Deactivate the Variant
    return prisma.productVariant.update({
      where: {
        id: variantId,
        productId: product.id,
      },
      data: {
        isActive: false,
      },
    });
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
