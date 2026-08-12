import { prisma } from '@/config/db.js';
import {
  addImageSchema,
  createProductSchema,
  updateImageSchema,
  updateProductSchema,
} from '@shared/validators/productsSchema.js';
import z from 'zod';
import { Prisma } from '@/generated/prisma/client.js';
import { AppError } from '@/utils/response.js';
import cloudinary from '@/config/cloudinary.js';

type CreateProductBody = z.infer<typeof createProductSchema>;
type UpdateProductBody = z.infer<typeof updateProductSchema>;
type AddImageBody = z.infer<typeof addImageSchema>;
type UpdateImageBody = z.infer<typeof updateImageSchema>;

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
        inspiredBy: true,
        isBestSeller: true,
        isNew: true,
        isActive: true,

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

          images: {
            create: images.map((image) => ({
              url: image.url,
              publicId: image.publicId,
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

  async findImage(searchBy: Prisma.ProductImageWhereUniqueInput) {
    return await prisma.productImage.findUnique({
      where: searchBy,
      select: {
        id: true,
        productId: true,
        publicId: true,
        isMain: true,
      },
    });
  },

  async addImage(productId: string, data: AddImageBody) {
    const existingImage = await this.findImage({ url: data.url });

    if (existingImage) {
      throw new AppError(409, 'Image already exists with this URL');
    }

    return prisma.$transaction(async (tx) => {
      if (data.isMain) {
        await tx.productImage.updateMany({
          where: {
            productId,
            isMain: true,
          },
          data: {
            isMain: false,
          },
        });
      }

      return tx.productImage.create({
        data: {
          productId,
          ...data,
        },
      });
    });
  },

  async updateImage(imageId: string, data: UpdateImageBody) {
    const existingImage = await this.findImage({ id: imageId });

    if (!existingImage) {
      throw new AppError(404, 'Product image not found');
    }

    return prisma.$transaction(async (tx) => {
      if (data.isMain === true) {
        await tx.productImage.updateMany({
          where: {
            productId: existingImage.productId,
            id: { not: imageId },
            isMain: true,
          },
          data: {
            isMain: false,
          },
        });
      }

      return tx.productImage.update({
        where: { id: imageId },
        data,
      });
    });
  },

  async deleteImage(imageId: string) {
    const existingImage = await this.findImage({ id: imageId });

    if (!existingImage) {
      throw new AppError(404, 'Product image not found');
    }

    const result = await cloudinary.uploader.destroy(existingImage.publicId);

    if (result.result !== 'ok' && result.result !== 'not found') {
      throw new AppError(500, 'Failed to delete image from Cloudinary');
    }

    return await prisma.productImage.delete({
      where: { id: imageId },
    });
  },
};
