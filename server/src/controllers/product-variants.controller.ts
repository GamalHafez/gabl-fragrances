import { productVariantsService } from '@/services/product-variants.service.js';
import { sendSuccess } from '@/utils/response.js';
import type { NextFunction, Request, Response } from 'express';

export const restockInventory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      params: { productSlug, variantId },
      body,
    } = req;

    const variant = await productVariantsService.restock(
      String(productSlug),
      String(variantId),
      body,
    );

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Inventory restocked successfully',
      data: { variant },
    });
  } catch (error) {
    next(error);
  }
};
