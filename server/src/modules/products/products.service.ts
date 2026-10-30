import { prisma } from '@/config/db.js';
import {
  createProductSchema,
  searchProductsQuerySchema,
  updateProductSchema,
} from '@shared/validators/productsSchema.js';
import z from 'zod';
import { Prisma } from '@/generated/prisma/client.js';
import { AppError } from '@/utils/response.js';
import { Product } from '@shared/types/product.js';
import { getMainProductVariant } from '@shared/utils/products.js';

export type CreateProductBody = z.infer<typeof createProductSchema>;
type UpdateProductBody = z.infer<typeof updateProductSchema>;
type SearchProductsQuery = z.infer<typeof searchProductsQuerySchema>;

async function getVariantSales() {
  const rows = await prisma.orderItem.groupBy({
    by: ['productVariantId'],
    where: { order: { status: { not: 'CANCELLED' } } },
    _sum: { quantity: true },
  });

  return new Map(rows.map((r) => [r.productVariantId, r._sum.quantity ?? 0]));
}

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

  async getRelatedProducts(product: Product) {
    return await prisma.product.findMany({
      where: {
        isActive: true,
        id: {
          not: product.id,
        },
        gender: product.gender,
        bestSeasons: {
          hasSome: product.bestSeasons,
        },
      },
      take: 8,
      orderBy: {
        createdAt: 'desc',
      },

      select: {
        id: true,
        slug: true,
        name: true,
        gender: true,
        isBestSeller: true,
        isNew: true,
        images: {
          where: {
            isMain: true,
          },
          select: {
            id: true,
            url: true,
            publicId: true,
            isMain: true,
            description: true,
          },
        },
        variants: {
          where: { isActive: true },
          orderBy: { price: 'asc' },
          select: { id: true, price: true, sizeML: true }, // no stock
        },
      },
    });
  },

  async getSamples() {
    return prisma.product.findMany({
      where: {
        isActive: true,
        variants: {
          some: {
            sizeML: 5,
            isActive: true,
          },
        },
      },
      orderBy: { createdAt: 'asc' },
      select: {
        id: true,
        slug: true,
        name: true,
        gender: true,
        bestSeasons: true,
        inspiredBy: true,
        isBestSeller: true,
        isNew: true,
        isActive: true,

        images: {
          where: {
            isMain: true,
          },
          select: {
            id: true,
            url: true,
            description: true,
          },
        },

        variants: {
          where: {
            sizeML: 5,
            isActive: true,
          },
          select: {
            id: true,
            label: true,
            isActive: true,
            sizeML: true,
            price: true,
            stock: true,
          },
        },
      },
    });
  },

  async getBestSellers(gender?: CreateProductBody['gender']) {
    const products = await prisma.product.findMany({
      where: {
        isActive: true,
        isBestSeller: true,
        ...(gender && { gender }),
      },
      take: 4,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        slug: true,
        name: true,
        description: true,
        gender: true,
        inspiredBy: true,
        isNew: true,
        images: {
          where: { isMain: true },
          select: { id: true, url: true, description: true },
        },
        variants: {
          where: { isActive: true },
          orderBy: { price: 'asc' },
          select: { id: true, price: true, sizeML: true },
        },
      },
    });

    return products.map(({ variants, ...product }) => ({
      ...product,
      variant: getMainProductVariant(variants),
    }));
  },

  async getFeaturedProducts(limit = 8) {
    const products = await prisma.product.findMany({
      where: {
        isActive: true,
        variants: { some: { isActive: true, stock: { gt: 0 } } },
      },
      take: limit,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        slug: true,
        name: true,
        gender: true,
        inspiredBy: true,
        isNew: true,
        images: {
          where: { isMain: true },
          select: { id: true, url: true, description: true },
        },
        variants: {
          where: { isActive: true },
          orderBy: { price: 'asc' },
          select: { id: true, price: true, sizeML: true, stock: true }, // no stock
        },
      },
    });

    return products
      .map(({ variants, ...product }) => ({
        ...product,
        variant: getMainProductVariant(variants),
      }))
      .filter((product) => product.variant && product.variant.stock > 0);
  },

  async searchProducts(params: SearchProductsQuery) {
    const { q, gender, sort } = params;

    const rows = await prisma.product.findMany({
      where: {
        isActive: true,
        variants: { some: { isActive: true } },
        ...(gender && { gender }),
        ...(q && {
          OR: [
            { name: { contains: q, mode: 'insensitive' } },
            { inspiredBy: { contains: q, mode: 'insensitive' } },
          ],
        }),
      },
      select: {
        id: true,
        slug: true,
        name: true,
        gender: true,
        inspiredBy: true,
        isNew: true,
        images: {
          where: { isMain: true },
          select: { id: true, url: true, description: true },
        },
        variants: {
          where: { isActive: true },
          orderBy: { price: 'asc' },
          select: { id: true, price: true, sizeML: true, stock: true },
        },
      },
    });

    const sales = sort === 'best-selling' ? await getVariantSales() : null;

    const entries = rows.map(({ variants, ...product }) => {
      const variant = getMainProductVariant(variants);
      return {
        product: { ...product, variant },
        price: Number(variant?.price ?? 0),
        sold: variants.reduce((sum, v) => sum + (sales?.get(v.id) ?? 0), 0),
      };
    });

    entries.sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      return b.sold - a.sold || a.product.name.localeCompare(b.product.name);
    });

    return { products: entries.map((e) => e.product) };
  },
};
