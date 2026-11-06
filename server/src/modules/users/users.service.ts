import { prisma } from '@/config/db.js';
import { Prisma } from '@/generated/prisma/client.js';
import { AppError } from '@/utils/response.js';
import type { UpdatePersonalInfoRequest } from '@shared/validators/editProfileSchemas.js';

const personalInfoSelect = {
  id: true,
  name: true,
  email: true,
  updatedAt: true,
  addresses: {
    where: { isDefault: true },
    select: {
      id: true,
      address: true,
      country: true,
      city: true,
      governorate: true,
      postalCode: true,
      locationUrl: true,
    },
  },
} satisfies Prisma.UserSelect;

export const usersService = {
  async updatePersonalInfo(id: string, body: UpdatePersonalInfoRequest) {
    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();

    const current = await prisma.user.findUnique({
      where: { id },
      select: personalInfoSelect,
    });

    if (!current) {
      throw new AppError(404, 'User not found');
    }

    const data: Prisma.UserUpdateInput = {};
    if (name !== undefined && name !== current.name) data.name = name;
    if (email !== undefined && email !== current.email) data.email = email;

    if (Object.keys(data).length === 0) {
      return current; // nothing changed, skip the write
    }

    try {
      return await prisma.user.update({
        where: { id },
        data,
        select: personalInfoSelect,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new AppError(409, 'This email is already in use');
      }
      throw error;
    }
  },
};
