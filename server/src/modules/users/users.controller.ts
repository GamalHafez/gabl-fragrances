import type { Request, Response, NextFunction } from 'express';
import { sendSuccess } from '@/utils/response.js';
import { usersService } from './users.service.js';
import { setCookie } from '@/utils/tokens.js';

export const updatePersonalInfo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await usersService.updatePersonalInfo(req.user!.id, req.body);

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Profile updated successfully',
      data: { user },
    });
  } catch (error) {
    next(error);
  }
};

export const changePassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { accessToken, refreshToken } = await usersService.changePassword(
      req.user!.id,
      req.body,
    );

    setCookie(res, 'accessToken', accessToken, 30 * 24 * 60 * 60 * 1000);
    setCookie(res, 'refreshToken', refreshToken, 30 * 24 * 60 * 60 * 1000);

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Password changed successfully',
    });
  } catch (error) {
    next(error);
  }
};

export const getDefaultAddress = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const defaultAddress = await usersService.getDefaultAddress(req.user!.id);

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Default address retrieved successfully',
      data: { defaultAddress },
    });
  } catch (error) {
    next(error);
  }
};
