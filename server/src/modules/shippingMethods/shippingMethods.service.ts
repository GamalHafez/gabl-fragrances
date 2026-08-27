import { prisma } from '@/config/db.js';
import { Prisma } from '@/generated/prisma/client.js';
import { AppError } from '@/utils/response.js';
import { createShippingMethodSchema } from '@shared/validators/shippingMethodsSchema.js';
import z from 'zod';

type CreateShippingMethodBody = z.infer<typeof createShippingMethodSchema>;

export const shippingMethodsService = {
  async createShippingMethod(data: CreateShippingMethodBody) {
    try {
      return await prisma.shippingMethod.create({
        data,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new AppError(
          409,
          `There's already a shipping method with the name "${data.name}".`,
        );
      }

      throw error;
    }
  },
};
