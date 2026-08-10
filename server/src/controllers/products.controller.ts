import { productsService } from '@/services/products.service.js';
import { sendSuccess } from '@/utils/response.js';
import type { NextFunction, Request, Response } from 'express';

export const getProducts = async (
  req: Request,
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
