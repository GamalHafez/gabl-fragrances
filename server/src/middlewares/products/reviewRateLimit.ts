import rateLimit from 'express-rate-limit';

export const reviewRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  limit: 5, // 5 review submissions per IP per hour
  message: {
    success: false,
    message: 'Too many reviews submitted. Please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});
