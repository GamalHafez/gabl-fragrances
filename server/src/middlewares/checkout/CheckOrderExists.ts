import { Request, Response, NextFunction } from 'express';
import { prisma } from '@/config/db.js';
import { AppError } from '@/utils/response.js';

export const CheckOrderExists = async (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  try {
    const { orderId } = req.params;

    if (!orderId) {
      throw new AppError(400, 'Order ID is required');
    }

    const order = await prisma.order.findUnique({
      where: {
        id: orderId as string,
      },
      select: {
        id: true,
        orderNumber: true,
        status: true,
        customerName: true,
        customerContact: true,
        customerPhone: true,
        subTotal: true,
        shipping: true,
        total: true,
        shippingAddress: true,
        shippingCity: true,
        shippingGovernorate: true,
        shippingCountry: true,
        shippingMethodName: true,
        createdAt: true,
        items: {
          select: {
            productName: true,
            sizeML: true,
            quantity: true,
            unitPrice: true,
          },
        },
        payments: {
          select: { method: true, status: true, amount: true },
        },
      },
    });

    if (!order) {
      throw new AppError(404, 'Order not found');
    }

    req.order = order;
    next();
  } catch (error) {
    next(error);
  }
};
