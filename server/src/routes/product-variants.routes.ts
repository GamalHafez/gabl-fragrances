import {
  createVariant,
  deleteVariant,
  getVariants,
  restockInventory,
  updateVariant,
} from '@/controllers/product-variants.controller.js';
import { requireAuth } from '@/middlewares/auth/requireAuth.js';
import { requirePermission } from '@/middlewares/auth/requirePermission.js';
import { validateRequest } from '@/middlewares/auth/validateRequest.js';
import {
  createVariantSchema,
  restockSchema,
  updateVariantSchema,
} from '@shared/validators/productsSchema.js';
import { Router } from 'express';

const router = Router();

router
  .route('/')
  .get(requireAuth, requirePermission('products:read'), getVariants)
  .post(
    requireAuth,
    requirePermission('products:update'),
    validateRequest(createVariantSchema),
    createVariant,
  );

router
  .route('/:variantId')
  .patch(
    requireAuth,
    requirePermission('products:update'),
    validateRequest(updateVariantSchema),
    updateVariant,
  )
  .delete(requireAuth, requirePermission('products:delete'), deleteVariant);

router
  .route('/:variantId/restock')
  .post(
    requireAuth,
    requirePermission('inventory:update'),
    validateRequest(restockSchema),
    restockInventory,
  );
export default router;
