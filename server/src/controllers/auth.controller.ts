import type { Request, Response, NextFunction } from 'express';
import { AppError, sendSuccess } from '@/utils/response.js';
import { setCookie } from '@/utils/tokens.js';
import { authService } from '@/services/auth.service.js';

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { user, accessToken, refreshToken } = await authService.signUp(
      req.body,
    );

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

export const refresh = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      throw new AppError(401, 'Refresh token is required');
    }

    const {
      user,
      accessToken,
      refreshToken: newRefreshToken,
    } = await authService.refresh(refreshToken);

    // set the cookies
    setCookie(res, 'accessToken', accessToken, 15 * 60 * 1000);
    setCookie(res, 'refreshToken', refreshToken, 30 * 24 * 60 * 60 * 1000);

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Token refreshed successfully',
      data: { user },
    });
  } catch (error) {
    next(error);
  }
};
