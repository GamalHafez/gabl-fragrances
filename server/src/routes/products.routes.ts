import { Router } from 'express';
import { getProducts, getProduct } from '@/controllers/products.controller.js';
import { getProductBySlug } from '@/middlewares/products/index.js';

const router = Router();

router.get('/', getProducts);

router.param('productSlug', getProductBySlug);
router.route('/:productSlug').get(getProduct); // For Product Details page

export default router;
