import { sendSuccess } from '@/utils/response.js';
import type { Request, Response, NextFunction } from 'express';
import { profileService } from './profile.service.js';

export const getProfileData = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    user: { id },
  } = req;

  try {
    const profileData = await profileService.getProfileData(id);

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Profile Data retrieved successfully',
      data: { profileData },
    });
  } catch (error) {
    next(error);
  }
};
