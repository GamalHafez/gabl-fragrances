import type { Request, Response, NextFunction } from 'express';
import { prisma } from '@/config/db.js';
import bcrypt from 'bcrypt';
import { sendError, sendSuccess } from '@/utils/response.js';

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
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    /*  // handle tokens later
    generateToken(user.id, res); */

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
  const { email, password: customerInputPassword } = req.body;

  try {
    // Find User
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return sendError(res, {
        statusCode: 401,
        message: 'Invalid email or password',
      });
    }

    const isMatch = await bcrypt.compare(customerInputPassword, user.password);

    if (!isMatch) {
      return sendError(res, {
        statusCode: 401,
        message: 'Invalid email or password',
      });
    }

    /* handle tokens later
    generateToken(user.id, res);
    */

    const { password, ...safeUser } = user;

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Logged in successfully',
      data: { user: safeUser },
    });
  } catch (error) {
    next(error);
  }
};
