import type { Request, Response, NextFunction } from 'express';
import { prisma } from '@/config/db.js';
import bcrypt from 'bcrypt';
import { sendError, sendSuccess } from '@/utils/response.js';

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
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
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'CUSTOMER', // ???
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

    /*  // generate a token
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
