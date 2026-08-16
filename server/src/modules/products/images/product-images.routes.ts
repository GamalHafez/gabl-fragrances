import {
  addImage,
  deleteImage,
  updateImage,
} from '@/modules/products/images/product-images.controller.js';
import { requireAuth } from '@/middlewares/auth/requireAuth.js';
import { requirePermission } from '@/middlewares/auth/requirePermission.js';
import { validateRequest } from '@/middlewares/auth/validateRequest.js';
import {
  addImageSchema,
  updateImageSchema,
} from '@shared/validators/productsSchema.js';
import { Router } from 'express';

const router = Router();

router
  .route('/')
  .post(
    requireAuth,
    validateRequest(addImageSchema),
    requirePermission('products:update'),
    addImage,
  );

router
  .route('/:imageId')
  .patch(
    requireAuth,
    validateRequest(updateImageSchema),
    requirePermission('products:update'),
    updateImage,
  )
  .delete(requireAuth, requirePermission('products:update'), deleteImage);

export default router;
