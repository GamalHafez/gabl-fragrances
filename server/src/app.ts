// Package imports
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';

// Middlewares imports
import { routeNotFound, errorHandler } from '@/middlewares/app/index.js';

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

// Middlewares
app.use(routeNotFound);
app.use(errorHandler);

export default app;
