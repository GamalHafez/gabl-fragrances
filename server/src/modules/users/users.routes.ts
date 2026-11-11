import { requireAuth } from '@/middlewares/auth/requireAuth.js';
import { validateRequest } from '@/middlewares/auth/validateRequest.js';
import { Router } from 'express';
import {
  changePassword,
  getDefaultAddress,
  updatePersonalInfo,
} from './users.controller.js';
import {
  changePasswordSchema,
  updatePersonalInfoSchema,
} from '@shared/validators/editProfileSchemas.js';
import { changePasswordLimiter } from '@/utils/changePasswordLimiter.js';

const router = Router();

// everything below needs a logged-in user
router.use(requireAuth);

router
  .patch('/me', validateRequest(updatePersonalInfoSchema), updatePersonalInfo)
  .patch(
    '/me/password',
    changePasswordLimiter,
    validateRequest(changePasswordSchema),
    changePassword,
  )
  .get('/me/address/default', getDefaultAddress);

export default router;
