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

    const order = await ordersService.createOrder(body, user?.id);

    return sendSuccess(res, {
      statusCode: 201,
      message: 'Order created successfully',
      data: { order },
    });
  } catch (error) {
    next(error);
  }
};

export const getOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  return sendSuccess(res, {
    statusCode: 200,
    message: 'Current order retrieved successfully',
    data: { order: req.order },
  });
};
