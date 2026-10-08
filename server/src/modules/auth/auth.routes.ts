import { Router } from 'express';
import {
  login,
  signUp,
  refresh,
  logout,
  getCurrentUser,
  checkEmail,
} from '@/modules/auth/auth.controller.js';
import { loginSchema, signupSchema } from '@shared/schemas/auth.validators.js';
import { validateRequest, requireAuth } from '@/middlewares/auth/index.js';
import { reviewRateLimit } from '@/middlewares/products/reviewRateLimit.js';

const router = Router();

router.get('/me', requireAuth, getCurrentUser);
router.post('/signup', validateRequest(signupSchema), signUp);
router.post('/login', validateRequest(loginSchema), login);
router.route('/check-email').get(reviewRateLimit, checkEmail);
router.post('/refresh', refresh);
router.post('/logout', logout);

export default router;
