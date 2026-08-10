import { Router } from 'express';
import {
  login,
  signUp,
  refresh,
  logout,
} from '@/controllers/auth.controller.js';
import { loginSchema, signupSchema } from '@shared/schemas/auth.validators.js';
import { validateRequest } from '@/middlewares/auth/validateRequest.js';

const router = Router();

router.post('/signup', validateRequest(signupSchema), signUp);
router.post('/login', validateRequest(loginSchema), login);
router.post('/refresh', refresh);
router.post('/logout', logout);

export default router;
