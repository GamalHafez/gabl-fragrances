import { sendSuccess } from '@/utils/response.js';
import type { Request, Response } from 'express';

export const healthCheck = (_req: Request, res: Response) => {
  return sendSuccess(res, {
    statusCode: 200,
    message: 'API is running successfully.',
  });
};
