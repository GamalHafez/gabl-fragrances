import { Router } from 'express';
import { createOrderSchema } from '@shared/validators/ordersSchemas.js';
import { validateRequest } from '@/middlewares/auth/validateRequest.js';
import { createOrder } from './orders.controller.js';

const router = Router();

router.route('/').post(validateRequest(createOrderSchema), createOrder);

export default router;
