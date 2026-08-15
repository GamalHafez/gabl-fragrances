import { getReviews } from '@/controllers/product-reviews.controller.js';
import { Router } from 'express';

const router = Router();

router.route('/').get(getReviews);

export default router;
