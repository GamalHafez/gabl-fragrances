import rateLimit from 'express-rate-limit';
import { AppError } from './response.js';

export const changePasswordLimiter = rateLimit({
  windowMs: 15 * 60_000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_req, _res, next) =>
    next(new AppError(429, 'Too many attempts. Please try again later.')),
});
