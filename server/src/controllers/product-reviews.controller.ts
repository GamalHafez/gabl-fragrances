import { productReviewsService } from '@/services/product-reviews.service.js';
import { sendSuccess } from '@/utils/response.js';
import type { NextFunction, Request, Response } from 'express';

export const getReviews = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { product } = req;

    const reviews = await productReviewsService.getReviews(product!.id);

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Reviews retrieved successfully',
      data: { reviews },
    });
  } catch (error) {
    next(error);
  }
};
