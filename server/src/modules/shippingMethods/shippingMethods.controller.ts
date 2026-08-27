import { sendSuccess } from '@/utils/response.js';
import type { NextFunction, Request, Response } from 'express';
import { shippingMethodsService } from './shippingMethods.service.js';

export const getShippingMethods = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const shippingMethods = await shippingMethodsService.getShippingMethods();

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Shipping Methods retrieved successfully',
      data: { shippingMethods },
    });
  } catch (error) {
    next(error);
  }
};

export const createShippingMethod = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { body } = req;

    const shippingMethod =
      await shippingMethodsService.createShippingMethod(body);

    return sendSuccess(res, {
      statusCode: 201,
      message: 'Shipping Method created successfully',
      data: { shippingMethod },
    });
  } catch (error) {
    next(error);
  }
};
