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
  getRelatedProducts,
} from '@/controllers/products.controller.js';
import { getProductBySlug } from '@/middlewares/products/index.js';
import {
  requireAuth,
  requirePermission,
  validateRequest,
} from '@/middlewares/auth/index.js';
import productImagesRoute from '@/routes/product-images.routes.js';
import productVariantsRoute from '@/routes/product-variants.routes.js';

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

router.get('/:productSlug/related', getRelatedProducts);

router.use('/:productSlug/images', productImagesRoute);
router.use('/:productSlug/variants', productVariantsRoute);

export default router;
