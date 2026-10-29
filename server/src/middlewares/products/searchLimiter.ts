import rateLimit from 'express-rate-limit';
import { AppError } from '@/utils/response.js';

export const searchLimiter = rateLimit({
  windowMs: 60_000,
  limit: 30, // `max` on express-rate-limit < 7
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_req, _res, next) =>
    next(new AppError(429, 'Too many searches. Please try again in a minute.')),
});
