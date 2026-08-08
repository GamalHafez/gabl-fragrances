import { sendError } from '@/utils/response.js';
import type { Request, Response, NextFunction } from 'express';
import { ZodType } from 'zod';

export const validateRequest = <T>(schema: ZodType<T>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.body) {
      return sendError(res, {
        statusCode: 400,
        message: 'Request body is missing',
      });
    }

    const result = schema.safeParse(req.body);

    if (!result.success) {
      return sendError(res, {
        statusCode: 400,
        message: result.error.issues.map((issue) => issue.message).join(', '),
      });
    }

    req.body = result.data;

    next();
  };
};
