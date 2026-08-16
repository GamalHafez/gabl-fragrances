import { prisma } from '@/config/db.js';
import { Prisma } from '@/generated/prisma/client.js';
import { AppError } from '@/utils/response.js';
import cloudinary from '@/config/cloudinary.js';
import {
  addImageSchema,
  updateImageSchema,
} from '@shared/validators/productsSchema.js';
import z from 'zod';

type AddImageBody = z.infer<typeof addImageSchema>;

type UpdateImageBody = z.infer<typeof updateImageSchema>;

export const productImagesService = {
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
