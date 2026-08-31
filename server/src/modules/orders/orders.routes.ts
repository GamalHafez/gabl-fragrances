import { createOrderSchema } from '@shared/validators/ordersSchemas.js';
import { validateRequest } from '@/middlewares/auth/validateRequest.js';
import { Router } from 'express';

const router = Router();

router.route('/').post(validateRequest(createOrderSchema));

export default router;
