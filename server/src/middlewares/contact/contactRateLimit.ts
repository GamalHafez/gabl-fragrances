import rateLimit from 'express-rate-limit';

export const contactRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 2, // 2 messages per IP per window
  message: {
    success: false,
    message: 'Too many messages sent. Please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});
