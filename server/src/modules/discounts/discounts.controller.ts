import type { Request, Response, NextFunction } from 'express';
import { AppError, sendSuccess } from '@/utils/response.js';
import { discountsService } from './discounts.service.js';
import { discountCodeSchema } from '@shared/validators/discountsSchema.js';

export const checkDiscountCode = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const parsed = discountCodeSchema.safeParse(req.query);

    if (!parsed.success) {
      throw new AppError(400, 'Invalid discount code');
    }

    const { code } = parsed.data;
    const discount = await discountsService.checkDiscountCode(code);

    if (!discount || !discount.isActive) {
      throw new AppError(404, 'Discount code not found or inactive');
    }

    return sendSuccess(res, {
      statusCode: 200,
      message: 'Discount retrieved successfully',
      data: {
        discount: {
          code: discount.code,
          type: discount.type,
          value: discount.value,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};
