import { productVariantsService } from '@/services/product-variants.service.js';
import { sendSuccess } from '@/utils/response.js';
import type { NextFunction, Request, Response } from 'express';

export const getVariants = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { product } = req;

    const variants = await productVariantsService.getVariants(product!.id);

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Variants retrieved successfully',
      data: { variants },
    });
  } catch (error) {
    next(error);
  }
};
export const createVariant = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      params: { productSlug },
      body,
    } = req;

    const variant = await productVariantsService.createVariant(
      String(productSlug),
      body,
    );

    return sendSuccess(res, {
      statusCode: 201,
      message: 'Variant created successfully',
      data: { variant },
    });
  } catch (error) {
    next(error);
  }
};

export const updateVariant = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      product,
      params: { variantId },
      body,
    } = req;

    const variant = await productVariantsService.updateVariant(
      product!,
      String(variantId),
      body,
    );

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Variant updated successfully',
      data: { variant },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteVariant = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      product,
      params: { variantId },
    } = req;

    const variant = await productVariantsService.deleteVariant(
      product!,
      String(variantId),
    );

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Variant archived successfully',
      data: { variant },
    });
  } catch (error) {
    next(error);
  }
};

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
