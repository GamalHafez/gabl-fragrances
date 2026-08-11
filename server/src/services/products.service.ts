import { prisma } from '@/config/db.js';
import { createProductSchema } from '@shared/validators/productsSchema.js';
import z, { email } from 'zod';
import { Prisma } from '@/generated/prisma/client.js';
import { AppError } from '@/utils/response.js';

type CreateProductBody = z.infer<typeof createProductSchema>;

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

  async validateCategories(categoryIds: string[]) {
    const categories = await prisma.category.findMany({
      where: {
        id: {
          in: categoryIds,
        },
      },
      select: {
        id: true,
      },
    });

    if (categories.length !== categoryIds.length) {
      throw new AppError(400, 'One or more categories do not exist');
    }
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
      categoryIds,
      images,
      variants,
    } = data;

    const existingProduct = await this.findProduct({ slug });

    if (existingProduct) {
      throw new AppError(409, 'Product already exists with this slug');
    }

    await this.validateCategories(categoryIds);

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

          categories: {
            connect: categoryIds.map((id) => ({
              id,
            })),
          },

          images: {
            create: images.map((image) => ({
              url: image.url,
              description: image.description,
              isMain: image.isMain,
            })),
          },

          variants: {
            create: variants.map((variant) => ({
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

          categories: true,
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
      where: searchBy,
      select: {
        id: true,
      },
    });

    return product;
  },
};
