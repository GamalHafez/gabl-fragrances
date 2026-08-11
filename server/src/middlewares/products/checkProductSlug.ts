import { Request, Response, NextFunction } from 'express';
import { prisma } from '@/config/db.js';
import { AppError } from '@/utils/response.js';

export const getProductBySlug = async (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  try {
    const { productSlug } = req.params;

    const product = await prisma.product.findUnique({
      where: {
        slug: productSlug as string,
      },
      select: {
        id: true,
        slug: true,
        name: true,
        description: true,
        gender: true,
        inspiredBy: true,
        topNotes: true,
        midNotes: true,
        baseNotes: true,
        vibes: true,
        bestSeasons: true,
        isBestSeller: true,

        categories: true,
        images: true,
        variants: true,

        reviews: true,
      },
    });

    if (!product) {
      throw new AppError(404, 'Product not found');
    }

    req.product = product;
    next();
  } catch (error) {
    next(error);
  }
};
