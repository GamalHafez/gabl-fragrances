import { loginSchema } from '@shared/schemas/auth.validators.js';
import z from 'zod';
import { prisma } from '@/config/db.js';
import { AppError } from '@/utils/response.js';
import bcrypt from 'bcrypt';
import {
  generateAccessToken,
  generateRefreshToken,
  getTokenExpiresAt,
  hashToken,
} from '@/utils/tokens.js';
import { User } from '@shared/types/user.js';
import { authConfig } from '@/config/auth.js';

type LoginInput = z.infer<typeof loginSchema>;

export const authService = {
  async login(data: LoginInput) {
    const { email, password: userPassword } = data;

    const user = await this.findUser(email);

    const isMatch = await bcrypt.compare(userPassword, user.password);

    if (!isMatch) {
      throw new AppError(401, 'Invalid email or password');
    }

    const { password, ...safeUser } = user;

    const { accessToken, refreshToken } = this.generateTokens(safeUser);
    const tokenHash = hashToken(refreshToken);
    await this.storeHashInDb(tokenHash, safeUser.id);

    return {
      user: safeUser,
      accessToken,
      refreshToken,
    };
  },

  async findUser(email: string) {
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        role: {
          select: {
            id: true,
            name: true,
          },
        },
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      throw new AppError(401, 'Invalid email or password');
    }

    return user;
  },

  generateTokens(user: User) {
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    return {
      accessToken,
      refreshToken,
    };
  },

  async storeHashInDb(tokenHash: string, userId: string) {
    await prisma.refreshToken.create({
      data: {
        tokenHash,
        userId,
        expiresAt: getTokenExpiresAt(authConfig.refreshTokenExpiresIn),
      },
    });
  },
};
