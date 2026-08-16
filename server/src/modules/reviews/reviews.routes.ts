import { getApprovedReviews } from '@/modules/reviews/reviews.controller.js';
import { validateRequest } from '@/middlewares/auth/validateRequest.js';
import { approvedReviewsQuerySchema } from '@shared/validators/reviewSchema.js';
import { Router } from 'express';

const router = Router();

router.get(
  '/approved',
  validateRequest(approvedReviewsQuerySchema, 'query'),
  getApprovedReviews,
);

export default router;
