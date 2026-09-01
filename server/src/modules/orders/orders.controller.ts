import { sendSuccess } from '@/utils/response.js';
import type { NextFunction, Request, Response } from 'express';
import { ordersService } from './orders.service.js';

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { body, user } = req;

    const shippingMethod = await ordersService.createOrder(body, user?.id);

    return sendSuccess(res, {
      statusCode: 201,
      message: 'Shipping Method created successfully',
      data: { shippingMethod },
    });
  } catch (error) {
    next(error);
  }
};
