import { Router } from 'express';
import {
  createProductSchema,
  updateProductSchema,
} from '@shared/validators/productsSchema.js';
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
import productReviewsRoute from '@/routes/product-reviews.routes.js';

const router = Router();

/* Product collection */
router
  .route('/')
  .get(getProducts)
  .post(
    requireAuth,
    validateRequest(createProductSchema),
    requirePermission('products:create'),
    createProduct,
  );

/* Product resources */
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

// Product sub-resources
router.get('/:productSlug/related', getRelatedProducts);

router.use('/:productSlug/images', productImagesRoute);
router.use('/:productSlug/variants', productVariantsRoute);
router.use('/:productSlug/reviews', productReviewsRoute);

export default router;
