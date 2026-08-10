import type { Request, Response, NextFunction } from 'express';
import { prisma } from '@/config/db.js';
import bcrypt from 'bcrypt';
import { sendError, sendSuccess } from '@/utils/response.js';
import {
  generateAccessToken,
  generateRefreshToken,
  getTokenExpiresAt,
  hashToken,
  setCookie,
} from '@/utils/tokens.js';
import { authConfig } from '@/config/auth.js';
import { authService } from '@/services/auth.service.js';

const SALT_ROUNDS = 12;

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, email, password } = req.body;

  try {
    // Check existing user
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return sendError(res, {
        statusCode: 409,
        message: 'User already exists with this email',
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // Create customer
    const user = await prisma.user.create({
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

    // Generate access token
    const accessToken = generateAccessToken(user, res);

    // Generate refresh token
    const refreshToken = generateRefreshToken(user, res);

    // Hash refresh token
    const tokenHash = hashToken(refreshToken);

    // Store hash in DB
    await prisma.refreshToken.create({
      data: {
        tokenHash,
        userId: user.id,
        expiresAt: getTokenExpiresAt(authConfig.refreshTokenExpiresIn),
      },
    });

    // set the cookies
    setCookie(res, 'accessToken', accessToken, 15 * 60 * 1000);
    setCookie(res, 'refreshToken', refreshToken, 30 * 24 * 60 * 60 * 1000);

    sendSuccess(res, {
      statusCode: 201,
      message: 'Registration Successful',
      data: { user },
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { user, accessToken, refreshToken } = await authService.login(
      req.body,
    );

    // set the cookies
    setCookie(res, 'accessToken', accessToken, 15 * 60 * 1000);
    setCookie(res, 'refreshToken', refreshToken, 30 * 24 * 60 * 60 * 1000);

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Logged in successfully',
      data: { user },
    });
  } catch (error) {
    next(error);
  }
};
