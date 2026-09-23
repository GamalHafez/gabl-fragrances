import { Router } from 'express';
import { checkDiscountCode } from './discounts.controller.js';
import { discountCheckRateLimit } from '@/middlewares/checkout/discountCheckRateLimit.js';

const router = Router();

router.get('/', discountCheckRateLimit, checkDiscountCode);

export default router;
