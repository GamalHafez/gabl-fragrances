import { prisma } from '@/config/db.js';
import { AppError } from '@/utils/response.js';

export const profileService = {
  async getProfileData(userId: string) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        role: {
          select: {
            id: true,
            name: true,
          },
        },
        addresses: {
          where: { isDefault: true },
          select: {
            id: true,
            address: true,
            country: true,
            city: true,
            governorate: true,
            postalCode: true,
          },
        },
      },
    });

    if (!user) {
      throw new AppError(404, 'User not found');
    }

    return user;
  },
};
