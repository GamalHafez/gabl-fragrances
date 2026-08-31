// Package imports
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';

// Middlewares imports
import { routeNotFound, errorHandler } from '@/middlewares/app/index.js';

// Routes imports
import healthRoutes from '@/modules/health/health.routes.js';
import authRoutes from '@/modules/auth/auth.routes.js';
import productsRoutes from '@/modules/products/products.routes.js';
import reviewsRoutes from '@/modules/reviews/reviews.routes.js';
import cartRoutes from '@/modules/cart/cart.routes.js';
import uploadRoutes from '@/modules/uploads/upload.routes.js';
import shippingMethodsRoutes from '@/modules/shippingMethods/shippingMethods.routes.js';
import ordersRoutes from '@/modules/orders/orders.routes.js';

const app = express();

// Global middlewares
app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/health', healthRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/uploads', uploadRoutes);
app.use('/api/reviews', reviewsRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/shipping-methods', shippingMethodsRoutes);
app.use('/api/orders', ordersRoutes);

// Middlewares
app.use(routeNotFound);
app.use(errorHandler);

export default app;
