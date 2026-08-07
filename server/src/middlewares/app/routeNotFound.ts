import { sendError } from '@/utils/index.js';
import type { Request, Response } from 'express';

export const routeNotFound = (req: Request, res: Response) => {
  return sendError(res, {
    statusCode: 404,
    message: 'The requested route was not found.',
  });
};
