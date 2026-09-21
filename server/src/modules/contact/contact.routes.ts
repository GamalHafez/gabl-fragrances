import { Router } from 'express';
import { validateRequest } from '@/middlewares/auth/validateRequest.js';
import { contactSchema } from '@shared/validators/contactSchema.js';
import { createMessage } from './contact.controller.js';
import { contactRateLimit } from '@/middlewares/contact/contactRateLimit.js';

const router = Router();

router
  .route('/')
  .post(contactRateLimit, validateRequest(contactSchema), createMessage);

export default router;
