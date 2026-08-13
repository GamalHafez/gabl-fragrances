import { createVariant, restockInventory } from '@/controllers/product-variants.controller.js';
import { requireAuth } from '@/middlewares/auth/requireAuth.js';
import { requirePermission } from '@/middlewares/auth/requirePermission.js';
import { validateRequest } from '@/middlewares/auth/validateRequest.js';
import {
  createVariantSchema,
  restockSchema,
} from '@shared/validators/productsSchema.js';
import { Router } from 'express';

const router = Router();

router
  .route('/')
  .post(
    requireAuth,
    requirePermission('products:update'),
    validateRequest(createVariantSchema),
    createVariant,
  );

router
  .route('/:variantId/restock')
  .post(
    requireAuth,
    requirePermission('inventory:update'),
    validateRequest(restockSchema),
    restockInventory,
  );
export default router;
