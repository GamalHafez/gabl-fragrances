import { previewCartSchema } from '@shared/validators/previewCartSchema.js';
import { validateRequest } from '@/middlewares/auth/validateRequest.js';
import { Router } from 'express';
import { getCartData } from '@/modules/cart/cart.controller.js';

const router = Router();

router.post('/preview', validateRequest(previewCartSchema), getCartData);

export default router;
