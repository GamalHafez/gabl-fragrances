import rateLimit from 'express-rate-limit';

export const discountCheckRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 10, // 10 discount checks per IP per window

  message: {
    success: false,
    message: 'Too many discount code attempts. Please try again later.',
  },

  standardHeaders: true,
  legacyHeaders: false,
});
