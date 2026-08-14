import { prisma } from '@/config/db.js';
import {
  createProductSchema,
  updateProductSchema,
} from '@shared/validators/productsSchema.js';
import z from 'zod';
import { Prisma } from '@/generated/prisma/client.js';
import { AppError } from '@/utils/response.js';

type CreateProductBody = z.infer<typeof createProductSchema>;
type UpdateProductBody = z.infer<typeof updateProductSchema>;

export const productsService = {
  async getProducts() {
    return prisma.product.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'asc' },
      select: {
        id: true,
        slug: true,
        name: true,
        gender: true,
        description: true,
        topNotes: true,
        midNotes: true,
        baseNotes: true,
        bestSeasons: true,
        vibes: true,
        inspiredBy: true,
        isBestSeller: true,
        isNew: true,
        isActive: true,

        images: {
          select: {
            id: true,
            url: true,
            description: true,
            isMain: true,
            publicId: true,
          },
        },

        variants: {
          select: {
            id: true,
            label: true,
            sizeML: true,
            price: true,
            stock: true,
          },
        },
      },
    });
  },

  async createProduct(data: CreateProductBody) {
    const {
      slug,
      name,
      description,
      gender,
      inspiredBy,
      topNotes,
      midNotes,
      baseNotes,
      vibes,
      bestSeasons,
      isBestSeller,
      isNew,
      images,
      variants,
    } = data;

    const existingProduct = await this.findProduct({ slug });

    if (existingProduct) {
      throw new AppError(409, 'Product already exists with this slug');
    }

    const product = await prisma.$transaction(async (tx) => {
      // create product
      const createdProduct = await tx.product.create({
        data: {
          slug,
          name,
          description,
          gender,
          inspiredBy,
          topNotes,
          midNotes,
          baseNotes,
          vibes,
          bestSeasons,
          isBestSeller,
          isNew,

          images: images.length
            ? {
                create: images.map((image) => ({
                  url: image.url,
                  publicId: image.publicId,
                  description: image.description,
                  isMain: image.isMain,
                })),
              }
            : undefined,

          variants: {
            create: variants.map((variant) => ({
              label: variant.label,
              sizeML: variant.sizeML,
              price: variant.price,
              stock: variant.stock,
            })),
          },
        },

        select: {
          id: true,
          slug: true,
          name: true,
          description: true,
          gender: true,
          inspiredBy: true,
          topNotes: true,
          midNotes: true,
          baseNotes: true,
          vibes: true,
          bestSeasons: true,
          isBestSeller: true,
          isNew: true,

          images: true,
          variants: true,

          createdAt: true,
          updatedAt: true,
        },
      });

      // Create inventory history for initial stock
      await Promise.all(
        createdProduct.variants
          .filter((variant) => variant.stock > 0)
          .map((variant) =>
            tx.inventoryTransaction.create({
              data: {
                productVariantId: variant.id,
                quantity: variant.stock,
                type: 'RESTOCK',
                reason: 'Initial product stock',
              },
            }),
          ),
      );

      // Return created product
      return createdProduct;
    });

    return product;
  },

  async findProduct(searchBy: Prisma.ProductWhereUniqueInput) {
    const product = await prisma.product.findUnique({
      where: { ...searchBy, isActive: true },
      select: {
        id: true,
      },
    });

    return product;
  },

  async updateProduct(productSlug: string, data: UpdateProductBody) {
    if (data.slug && data.slug !== productSlug) {
      const existingProduct = await prisma.product.findUnique({
        where: { slug: data.slug, isActive: true },
        select: { id: true },
      });

      if (existingProduct) {
        throw new AppError(409, 'A product already exists with this slug');
      }
    }

    return prisma.product.update({
      where: { slug: productSlug, isActive: true },
      data,
    });
  },

  async deleteProduct(productSlug: string) {
    // Deactivate the product
    return await prisma.product.update({
      where: { slug: productSlug },
      data: {
        isActive: false,
      },
    });
  },
};
