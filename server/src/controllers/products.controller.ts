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

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const product = await productsService.createProduct(req.body);

    return sendSuccess(res, {
      statusCode: 201,
      message: 'Created a product',
      data: { product },
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

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productSlug } = req.params;

    const updatedProduct = await productsService.updateProduct(
      String(productSlug),
      req.body,
    );

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Product updated successfully',
      data: { product: updatedProduct },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productSlug } = req.params;

    const product = await productsService.deleteProduct(String(productSlug));

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Product archived successfully',
      data: { product },
    });
  } catch (error) {
    next(error);
  }
};

export const addImage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { product, body } = req;

    const image = await productsService.addImage(product.id, body);

    return sendSuccess(res, {
      statusCode: 201,
      message: 'Product image added successfully',
      data: { image },
    });
  } catch (error) {
    next(error);
  }
};
