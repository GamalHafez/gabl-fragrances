import { sendError } from '@/utils/response.js';
import type { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.error(err.stack);
  }

  const statusCode = err.statusCode || 500;

  return sendError(res, {
    statusCode,
    message:
      process.env.NODE_ENV === 'production'
        ? 'Internal server error.'
        : err.message,
  });
};
