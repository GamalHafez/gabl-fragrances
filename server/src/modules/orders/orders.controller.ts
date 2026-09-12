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

export const getUserOrders = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      user: { id },
    } = req;

    const orders = await ordersService.getUserOrders(id);

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Orders retrieved successfully',
      data: { orders },
    });
  } catch (error) {
    next(error);
  }
};

export const getOrder = async (
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  return sendSuccess(res, {
    statusCode: 200,
    message: 'Current order retrieved successfully',
    data: { order: req.order },
  });
};

export const findGuestOrders = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      user: { email },
    } = req;

    const orders = await ordersService.findUnlinkedGuestOrders(email);

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Orders retrieved successfully',
      data: { orders },
    });
  } catch (error) {
    next(error);
  }
};

export const linkGuestOrders = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      user: { id, email },
    } = req;

    const result = await ordersService.linkGuestOrders(email, id);

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Orders linked successfully',
      data: {
        linkedCount: result.count,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getCheckoutDefaults = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const defaults = await ordersService.getCheckoutDefaults(req.user.id);

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Checkout defaults retrieved',
      data: { defaults },
    });
  } catch (error) {
    next(error);
  }
};
