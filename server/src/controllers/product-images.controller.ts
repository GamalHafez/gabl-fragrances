import type { NextFunction, Request, Response } from 'express';
import { sendSuccess } from '@/utils/response.js';
import { productImagesService } from '@/services/product-images.service.js';

export const addImage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { product, body } = req;

    const image = await productImagesService.addImage(product.id, body);

    return sendSuccess(res, {
      statusCode: 201,
      message: 'Product image added successfully',
      data: { image },
    });
  } catch (error) {
    next(error);
  }
};

export const updateImage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      params: { imageId },
      body,
    } = req;

    const updatedImage = await productImagesService.updateImage(
      String(imageId),
      body,
    );

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Product image updated successfully',
      data: { image: updatedImage },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteImage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      params: { imageId },
    } = req;

    const image = await productImagesService.deleteImage(String(imageId));

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Product image deleted successfully',
      data: { image },
    });
  } catch (error) {
    next(error);
  }
};
