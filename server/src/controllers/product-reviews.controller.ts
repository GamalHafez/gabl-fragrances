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

export const createReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { product, body, user } = req;
    const userId = user?.id ?? null;

    const review = await productReviewsService.createReview(
      product!.id,
      userId,
      body,
    );

    return sendSuccess(res, {
      statusCode: 201,
      message: 'Review created successfully',
      data: { review },
    });
  } catch (error) {
    next(error);
  }
};
