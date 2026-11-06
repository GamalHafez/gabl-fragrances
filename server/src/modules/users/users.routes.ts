import { requireAuth } from '@/middlewares/auth/requireAuth.js';
import { validateRequest } from '@/middlewares/auth/validateRequest.js';
import { Router } from 'express';
import { updatePersonalInfo } from './users.controller.js';
import { updatePersonalInfoSchema } from '@shared/validators/editProfileSchemas.js';

const router = Router();

// everything below needs a logged-in user
router.use(requireAuth);

router.patch(
  '/me',
  validateRequest(updatePersonalInfoSchema),
  updatePersonalInfo,
);

export default router;
