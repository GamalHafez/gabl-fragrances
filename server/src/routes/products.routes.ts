import {
  createProductSchema,
  updateProductSchema,
} from '@shared/validators/productsSchema.js';
import { Router } from 'express';
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from '@/controllers/products.controller.js';
import { getProductBySlug } from '@/middlewares/products/index.js';
import {
  requireAuth,
  requirePermission,
  validateRequest,
} from '@/middlewares/auth/index.js';

const router = Router();

router
  .route('/')
  .get(getProducts)
  .post(
    requireAuth,
    validateRequest(createProductSchema),
    requirePermission('products:create'),
    createProduct,
  );

router.param('productSlug', getProductBySlug);
router
  .route('/:productSlug')
  .get(getProduct) // For Product Details page
  .patch(
    requireAuth,
    validateRequest(updateProductSchema),
    requirePermission('products:update'),
    updateProduct,
  )
  .delete(requireAuth, requirePermission('products:delete'), deleteProduct);
export default router;
