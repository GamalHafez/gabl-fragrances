import type { Request, Response, NextFunction } from 'express';
import { sendSuccess } from '@/utils/response.js';
import { usersService } from './users.service.js';

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
