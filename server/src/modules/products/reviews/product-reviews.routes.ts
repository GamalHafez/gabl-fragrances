import { Router } from 'express';
import { createReviewSchema } from '@shared/validators/reviewSchema.js';
import {
  createReview,
  getReviews,
} from '@/modules/products/reviews/product-reviews.controller.js';
import { validateRequest } from '@/middlewares/auth/validateRequest.js';
import { attachUserIfPresent } from '@/middlewares/auth/requireAuth.js';
import { reviewRateLimit } from '@/middlewares/products/reviewRateLimit.js';

const router = Router();

router
  .route('/')
  .get(getReviews)
  .post(
    reviewRateLimit,
    attachUserIfPresent,
    validateRequest(createReviewSchema),
    createReview,
  );

export default router;
