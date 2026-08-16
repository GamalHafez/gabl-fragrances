import { sendError } from '@/utils/response.js';
import type { Request, Response, NextFunction } from 'express';
import { ZodType } from 'zod';

type RequestPart = 'body' | 'query';

export const validateRequest = <T>(
  schema: ZodType<T>,
  part: RequestPart = 'body',
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[part];

    if (!data) {
      return sendError(res, {
        statusCode: 400,
        message: `Request ${part} is missing`,
      });
    }

    const result = schema.safeParse(data);

    if (!result.success) {
      return sendError(res, {
        statusCode: 400,
        message: result.error.issues.map((issue) => issue.message).join(', '),
      });
    }

    if (part === 'body') {
      req.body = result.data;
    } else {
      Object.assign(req.query, result.data);
    }

    next();
  };
};
