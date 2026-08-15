import { Router } from 'express';
import { createReviewSchema } from '@shared/validators/reviewSchema.js';
import {
  createReview,
  getReviews,
} from '@/controllers/product-reviews.controller.js';
import { validateRequest } from '@/middlewares/auth/validateRequest.js';
import { optionalAuth } from '@/middlewares/auth/optionalAuth.js';

const router = Router();

router
  .route('/')
  .get(getReviews)
  .post(optionalAuth, validateRequest(createReviewSchema), createReview);

export default router;
