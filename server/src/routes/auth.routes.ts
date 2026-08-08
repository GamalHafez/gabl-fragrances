import { Router } from 'express';
import { Register } from '@/controllers/auth.controller.js';
import { signUpSchema } from '@shared/schemas/auth.validators.js';
import { validateRequest } from '@/middlewares/auth/validateRequest.js';

const router = Router();

router.get('/signup', validateRequest(signUpSchema), Register);

export default router;
