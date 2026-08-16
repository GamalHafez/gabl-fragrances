import type { Request, Response, NextFunction } from 'express';
import { uploadService } from '@/modules/uploads/upload.service.js';
import { sendSuccess } from '@/utils/response.js';

export const uploadProductImage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await uploadService.uploadProductImage(req.file);

    return sendSuccess(res, {
      statusCode: 201,
      message: 'Image uploaded successfully',
      data: {
        image: result,
      },
    });
  } catch (error) {
    next(error);
  }
};
