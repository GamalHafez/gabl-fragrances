import jwt, { type SignOptions } from 'jsonwebtoken';
import type { Response } from 'express';
import type { User } from '@shared/types/index.js';

export const generateAccessToken = (user: User, res: Response) => {
  const {
    id,
    role: { name: role },
  } = user;
  const payload = { sub: id, role };

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET is not defined in environment variables');
  }

  const expiresIn =
    (process.env.ACCESS_TOKEN_EXPIRES_IN as SignOptions['expiresIn']) || '15m';

  const accessToken = jwt.sign(payload, secret, { expiresIn });

  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 1000 * 60 * 15,
  });
};

export const generateRefreshToken = (user: User, res: Response) => {
  const payload = { sub: user.id };

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET is not defined in environment variables');
  }

  const expiresIn =
    (process.env.REFRESH_TOKEN_EXPIRES_IN as SignOptions['expiresIn']) || '30d';

  const refreshToken = jwt.sign(payload, secret, { expiresIn });

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};
