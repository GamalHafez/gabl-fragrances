import { type JwtPayload } from 'jsonwebtoken';
import { loginSchema, signupSchema } from '@shared/schemas/auth.validators.js';
import z from 'zod';
import { prisma } from '@/config/db.js';
import { AppError } from '@/utils/response.js';
import bcrypt from 'bcrypt';
import {
  generateAccessToken,
  generateRefreshToken,
  getTokenExpiresAt,
  hashToken,
  verifyRefreshToken,
} from '@/utils/tokens.js';
import { User } from '@shared/types/user.js';
import { authConfig } from '@/config/auth.js';
import { Prisma } from '@/generated/prisma/client.js';

type LoginInput = z.infer<typeof loginSchema>;
type SignUpInput = z.infer<typeof signupSchema>;

const SALT_ROUNDS = 12;

export const authService = {
  async signUp(data: SignUpInput) {
    const { name, email, password } = data;

    const existingUser = await this.findUser({ email }, false);
    if (existingUser) {
      throw new AppError(409, 'User already exists with this email');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await this.createUser(name, email, hashedPassword);

    const { accessToken, refreshToken } = this.generateTokens(user);
    const tokenHash = hashToken(refreshToken);
    await this.createRefreshToken(tokenHash, user.id);

    return {
      user,
      accessToken,
      refreshToken,
    };
  },

  async createUser(name: string, email: string, hashedPassword: string) {
    return await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: {
          connect: {
            name: 'CUSTOMER',
          },
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
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
  },

  async login(data: LoginInput) {
    const { email, password: userPassword } = data;

    const user = await this.findUser({ email }, true);

    if (!user) {
      throw new AppError(401, 'Invalid email or password');
    }

    const isMatch = await bcrypt.compare(userPassword, user.password);

    if (!isMatch) {
      throw new AppError(401, 'Invalid email or password');
    }

    const { password, ...safeUser } = user;

    const { accessToken, refreshToken } = this.generateTokens(safeUser);
    const tokenHash = hashToken(refreshToken);
    await this.createRefreshToken(tokenHash, safeUser.id);

    return {
      user: safeUser,
      accessToken,
      refreshToken,
    };
  },

  async findUser(
    searchBy: Prisma.UserWhereUniqueInput,
    includeDetails: boolean,
  ) {
    const user = await prisma.user.findUnique({
      where: searchBy,
      select: includeDetails
        ? {
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
          }
        : {
            id: true,
          },
    });

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

  async createRefreshToken(tokenHash: string, userId: string) {
    return await prisma.refreshToken.create({
      data: {
        tokenHash,
        userId,
        expiresAt: getTokenExpiresAt(authConfig.refreshTokenExpiresIn),
      },
    });
  },

  verifyAndValidateRefreshToken(refreshToken: string): JwtPayload {
    let payload: JwtPayload;

    try {
      payload = verifyRefreshToken(refreshToken) as JwtPayload;
    } catch {
      throw new AppError(401, 'Invalid or expired refresh token');
    }

    if (!payload.sub || typeof payload.sub !== 'string') {
      throw new AppError(401, 'Invalid refresh token');
    }

    return payload;
  },

  async findStoredToken(tokenHash: string) {
    return await prisma.refreshToken.findUnique({
      where: {
        tokenHash,
      },
    });
  },

  async refresh(refreshToken: string) {
    const payload = this.verifyAndValidateRefreshToken(refreshToken);

    const tokenHash = hashToken(refreshToken);

    const storedToken = await this.findStoredToken(tokenHash);

    if (!storedToken) {
      throw new AppError(401, 'Invalid refresh token');
    }

    if (storedToken.revokedAt) {
      throw new AppError(401, 'Refresh token has been revoked');
    }

    if (storedToken.expiresAt <= new Date()) {
      throw new AppError(401, 'Refresh token has expired');
    }

    if (storedToken.userId !== payload.sub) {
      throw new AppError(401, 'Invalid refresh token');
    }

    const user = await this.findUser({ id: payload.sub }, true);

    if (!user) {
      throw new AppError(401, 'User not Found');
    }

    const { password, ...safeUser } = user;

    const { accessToken, refreshToken: newRefreshToken } =
      this.generateTokens(safeUser);

    // Rotate refresh token
    await prisma.$transaction([
      prisma.refreshToken.update({
        where: {
          id: storedToken.id,
        },
        data: {
          revokedAt: new Date(),
        },
      }),

      prisma.refreshToken.create({
        data: {
          tokenHash: hashToken(newRefreshToken),
          userId: safeUser.id,
          expiresAt: getTokenExpiresAt(authConfig.refreshTokenExpiresIn),
        },
      }),
    ]);

    return {
      user: safeUser,
      accessToken,
      refreshToken: newRefreshToken,
    };
  },

  async logout(refreshToken: string) {
    this.verifyAndValidateRefreshToken(refreshToken);

    const tokenHash = hashToken(refreshToken);

    const storedToken = await this.findStoredToken(tokenHash);

    if (!storedToken) {
      throw new AppError(401, 'Invalid refresh token');
    }

    if (storedToken.revokedAt) {
      throw new AppError(401, 'Refresh token has already been revoked');
    }

    await prisma.refreshToken.update({
      where: { id: storedToken.id },
      data: { revokedAt: new Date() },
    });
  },
};
