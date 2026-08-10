import jwt, { type SignOptions } from 'jsonwebtoken';
import type { Response } from 'express';
import type { User } from '@shared/types/index.js';
import crypto from 'node:crypto';
import ms, { type StringValue } from 'ms';

export const generateAccessToken = (user: User) => {
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

  return accessToken;
};

export const generateRefreshToken = (user: User) => {
  const payload = { sub: user.id };

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET is not defined in environment variables');
  }

  const expiresIn =
    (process.env.REFRESH_TOKEN_EXPIRES_IN as SignOptions['expiresIn']) || '30d';

  const refreshToken = jwt.sign(payload, secret, { expiresIn });

  return refreshToken;
};

export const setCookie = (
  res: Response,
  name: string,
  value: string,
  maxAge: number,
) => {
  res.cookie(name, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge,
  });
};

export const hashToken = (token: string) => {
  return crypto.createHash('sha256').update(token).digest('hex');
};

export const getTokenExpiresAt = (expiresIn: StringValue) => {
  const milliseconds = ms(expiresIn);

  return new Date(Date.now() + milliseconds);
};
