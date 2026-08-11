import { productsService } from '@/services/products.service.js';
import { sendSuccess } from '@/utils/response.js';
import type { NextFunction, Request, Response } from 'express';

export const getProducts = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const products = await productsService.getProducts();

    return sendSuccess(res, {
      statusCode: 200,
      message: 'products retrieved successfully',
      data: { products },
    });
  } catch (error) {
    next(error);
  }
};
export const getProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { product } = req;

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Product retrieved successfully',
      data: { product },
    });
  } catch (error) {
    next(error);
  }
};
