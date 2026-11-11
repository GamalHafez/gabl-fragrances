import { prisma } from '@/config/db.js';
import { Prisma } from '@/generated/prisma/client.js';
import bcrypt from 'bcrypt';
import { AppError } from '@/utils/response.js';
import type {
  ChangePasswordRequest,
  UpdatePersonalInfoRequest,
} from '@shared/validators/editProfileSchemas.js';
import { authService } from '../auth/auth.service.js';
import { getTokenExpiresAt, hashToken } from '@/utils/tokens.js';
import { authConfig } from '@/config/auth.js';

const SALT_ROUNDS = 12;

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

const addressSelect = {
  id: true,
  address: true,
  country: true,
  city: true,
  governorate: true,
  postalCode: true,
  locationUrl: true,
} satisfies Prisma.AddressSelect;

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

  async changePassword(id: string, body: ChangePasswordRequest) {
    const { password, newPassword } = body;

    const user = await authService.findUser({ id }, true);
    if (!user) throw new AppError(404, 'User not found');

    const { password: passwordHash, ...safeUser } = user;

    const isMatch = await bcrypt.compare(password, passwordHash);
    if (!isMatch)
      throw new AppError(400, 'Your current password is incorrect.');

    const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);

    // Fresh tokens for this session; every other session gets revoked
    const { accessToken, refreshToken } = authService.generateTokens(safeUser);

    await prisma.$transaction([
      prisma.user.update({
        where: { id },
        data: { password: hashedPassword },
      }),
      prisma.refreshToken.updateMany({
        where: { userId: id, revokedAt: null },
        data: { revokedAt: new Date() },
      }),
      prisma.refreshToken.create({
        data: {
          tokenHash: hashToken(refreshToken),
          userId: id,
          expiresAt: getTokenExpiresAt(authConfig.refreshTokenExpiresIn),
        },
      }),
    ]);

    return { accessToken, refreshToken };
  },

  async getDefaultAddress(userId: string) {
    return await prisma.address.findFirst({
      where: { userId, isDefault: true },
      orderBy: { updatedAt: 'desc' },
      select: addressSelect,
    });
  },
};
