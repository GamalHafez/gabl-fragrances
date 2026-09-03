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

    const orderRes = await ordersService.createOrder(body, user?.id);

    return sendSuccess(res, {
      statusCode: 201,
      message: 'Order created successfully',
      data: { order: orderRes.order },
    });
  } catch (error) {
    next(error);
  }
};
