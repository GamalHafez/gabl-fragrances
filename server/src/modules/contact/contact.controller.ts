import type { Request, Response, NextFunction } from 'express';
import { sendSuccess } from '@/utils/response.js';
import { contactService } from './contact.service.js';

export const createMessage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await contactService.createMessage(req.body);

    return sendSuccess(res, {
      statusCode: 201,
      message: 'Your message has been sent successfully',
      data: { id: result.id },
    });
  } catch (error) {
    next(error);
  }
};
