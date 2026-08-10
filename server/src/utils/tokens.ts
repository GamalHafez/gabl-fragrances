import jwt, { type SignOptions } from 'jsonwebtoken';
import type { Response } from 'express';
import type { User } from '@shared/types/index.js';
import crypto from 'node:crypto';
import ms, { type StringValue } from 'ms';

import type { JwtPayload } from 'jsonwebtoken';
import { AppError } from './response.js';

export interface AuthTokenPayload extends JwtPayload {
  sub: string;
}

export const generateAccessToken = (user: User) => {
  const {
    id,
    role: { name: role },
  } = user;
  const payload = { sub: id, role };

  const secret = process.env.ACCESS_TOKEN_SECRET;
  if (!secret) {
    throw new Error(
      'ACCESS_TOKEN_SECRET is not defined in environment variables',
    );
  }

  const expiresIn =
    (process.env.ACCESS_TOKEN_EXPIRES_IN as SignOptions['expiresIn']) || '15m';

  const accessToken = jwt.sign(payload, secret, { expiresIn });

  return accessToken;
};

export const generateRefreshToken = (user: User) => {
  const payload = { sub: user.id, role: user.role.name };

  const secret = process.env.REFRESH_TOKEN_SECRET;
  if (!secret) {
    throw new Error(
      'REFRESH_TOKEN_SECRET is not defined in environment variables',
    );
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

export const verifyRefreshToken = (token: string) => {
  const secret = process.env.REFRESH_TOKEN_SECRET;

  if (!secret) {
    throw new Error(
      'REFRESH_TOKEN_SECRET is not defined in environment variables',
    );
  }

  return jwt.verify(token, secret);
};

export const verifyAccessToken = (token: string): AuthTokenPayload => {
  const secret = process.env.ACCESS_TOKEN_SECRET;

  if (!secret) {
    throw new Error(
      'ACCESS_TOKEN_SECRET is not defined in environment variables',
    );
  }

  const payload = jwt.verify(token, secret);

  if (
    typeof payload === 'string' ||
    !payload.sub ||
    typeof payload.sub !== 'string'
  ) {
    throw new AppError(401, 'Invalid access token');
  }

  return payload as AuthTokenPayload;
};
