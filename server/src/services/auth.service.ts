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
} from '@/utils/tokens.js';
import { User } from '@shared/types/user.js';
import { authConfig } from '@/config/auth.js';

type LoginInput = z.infer<typeof loginSchema>;
type SignUpInput = z.infer<typeof signupSchema>;
const SALT_ROUNDS = 12;

export const authService = {
  async signUp(data: SignUpInput) {
    const { name, email, password } = data;

    const existingUser = await this.findUserByEmail(email);
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

  async findUserByEmail(userEmail: string) {
    return await prisma.user.findUnique({
      where: { email: userEmail },
      select: {
        id: true,
      },
    });
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

    const user = await this.findUser(email);

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

  async createRefreshToken(tokenHash: string, userId: string) {
    await prisma.refreshToken.create({
      data: {
        tokenHash,
        userId,
        expiresAt: getTokenExpiresAt(authConfig.refreshTokenExpiresIn),
      },
    });
  },
};
