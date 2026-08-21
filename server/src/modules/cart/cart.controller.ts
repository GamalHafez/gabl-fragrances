import type { Request, Response, NextFunction } from 'express';
import { sendSuccess } from '@/utils/response.js';
import { cartService } from '@/modules/cart/cart.service.js';

export const getCartData = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { items } = req.body;
    const cartData = await cartService.getCartData(items);

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Cart data retrieved successfully',
      data: { cartData },
    });
  } catch (error) {
    next(error);
  }
};
