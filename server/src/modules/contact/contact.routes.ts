import { Router } from 'express';
import { validateRequest } from '@/middlewares/auth/validateRequest.js';
import { contactSchema } from '@shared/validators/contactSchema.js';
import { createMessage } from './contact.controller.js';

const router = Router();

router.route('/').post(validateRequest(contactSchema), createMessage);

export default router;
