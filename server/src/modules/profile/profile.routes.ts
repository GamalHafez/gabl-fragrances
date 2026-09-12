import { requireAuth } from '@/middlewares/auth/requireAuth.js';
import { Router } from 'express';
import { getProfileData } from './profile.controller.js';

const router = Router();

router.get('/', requireAuth, getProfileData);

export default router;
