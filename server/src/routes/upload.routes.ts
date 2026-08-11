import { Router } from 'express';
import { uploadProductImage } from '@/controllers/upload.controller.js';
import { requireAuth } from '@/middlewares/auth/index.js';
import { requirePermission } from '@/middlewares/auth/requirePermission.js';
import upload from '@/middlewares/app/upload.js';

const router = Router();

router.post(
  '/images/products',
  requireAuth,
  requirePermission('products:create'),
  upload,
  uploadProductImage,
);

export default router;
