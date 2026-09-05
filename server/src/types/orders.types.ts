import { Prisma } from '@/generated/prisma/client.js';

export type OrderWithDetails = Prisma.OrderGetPayload<{
  select: {
    id: true;
    orderNumber: true;
    status: true;
    customerName: true;
    customerContact: true;
    customerPhone: true;
    subTotal: true;
    shipping: true;
    total: true;
    shippingAddress: true;
    shippingCity: true;
    shippingGovernorate: true;
    shippingCountry: true;
    shippingMethodName: true;
    createdAt: true;
    items: {
      select: {
        productName: true;
        sizeML: true;
        quantity: true;
        unitPrice: true;
      };
    };
    payments: {
      select: { method: true; status: true; amount: true };
    };
  };
}>;
