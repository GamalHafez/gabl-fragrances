import { Router } from 'express';
import { createOrderSchema } from '@shared/validators/ordersSchemas.js';
import { validateRequest } from '@/middlewares/auth/validateRequest.js';
import { createOrder, getOrder } from './orders.controller.js';
import { CheckOrderExists } from '@/middlewares/checkout/CheckOrderExists.js';

const router = Router();

router.route('/').post(validateRequest(createOrderSchema), createOrder);

router.param('orderId', CheckOrderExists);

router.route('/:orderId').get(getOrder);

export default router;
