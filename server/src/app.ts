// Package imports
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';

// Middlewares imports
import { routeNotFound, errorHandler } from '@/middlewares/app/index.js';

// Routes imports
import healthRoutes from '@routes/health.routes.js';
import authRoutes from '@routes/auth.routes.js';
import productsRoutes from '@routes/products.routes.js';

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

// Middlewares
app.use(routeNotFound);
app.use(errorHandler);

export default app;
