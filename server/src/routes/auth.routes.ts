import { Router } from 'express';
import {
  login,
  signUp,
  refresh,
  logout,
  getCurrentUser,
} from '@/controllers/auth.controller.js';
import { loginSchema, signupSchema } from '@shared/schemas/auth.validators.js';
import { validateRequest, requireAuth } from '@/middlewares/auth/index.js';

const router = Router();

router.get('/me', requireAuth, getCurrentUser);
router.post('/signup', validateRequest(signupSchema), signUp);
router.post('/login', validateRequest(loginSchema), login);
router.post('/refresh', refresh);
router.post('/logout', logout);

export default router;
