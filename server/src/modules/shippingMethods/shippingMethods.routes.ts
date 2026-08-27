import { Router } from 'express';
import {
  requireAuth,
  requirePermission,
  validateRequest,
} from '@/middlewares/auth/index.js';
import { createShippingMethodSchema } from '@shared/validators/shippingMethodsSchema.js';
import { createShippingMethod } from './shippingMethods.controller.js';
const router = Router();

router.route('/').post(
  requireAuth,
  // TODO: replace with shipping-methods:create when shipping permissions are introduced
  requirePermission('orders:read'),
  validateRequest(createShippingMethodSchema),
  createShippingMethod,
);

export default router;
