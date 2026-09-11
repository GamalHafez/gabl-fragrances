import { Router } from 'express';
import { createOrderSchema } from '@shared/validators/ordersSchemas.js';
import {
  createOrder,
  findGuestOrders,
  getCheckoutDefaults,
  getOrder,
  linkGuestOrders,
} from './orders.controller.js';
import { CheckOrderExists } from '@/middlewares/checkout/CheckOrderExists.js';
import {
  attachUserIfPresent,
  requireAuth,
} from '@/middlewares/auth/requireAuth.js';
import { validateRequest } from '@/middlewares/auth/validateRequest.js';

const router = Router();

router
  .route('/')
  .post(attachUserIfPresent, validateRequest(createOrderSchema), createOrder);

router.route('/guest').get(requireAuth, findGuestOrders);
router.route('/guest/link').post(requireAuth, linkGuestOrders);
router.route('/checkout-defaults').get(requireAuth, getCheckoutDefaults);

router.param('orderId', attachUserIfPresent);
router.param('orderId', CheckOrderExists);

router.route('/:orderId').get(getOrder);

export default router;
