import type { Request, Response, NextFunction } from 'express';
import { sendSuccess } from '@/utils/response.js';
import { reviewsService } from '@/services/reviews.service.js';
import { approvedReviewsQuerySchema } from '@shared/validators/reviewSchema.js';

export const getApprovedReviews = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { limit } = approvedReviewsQuerySchema.parse(req.query);

    const reviews = await reviewsService.getApprovedReviews(limit);

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Approved reviews retrieved successfully',
      data: { reviews },
    });
  } catch (error) {
    next(error);
  }
};
