import type { User, Product } from '@shared/types';
import { OrderWithDetails } from './orders.types.ts';

declare global {
  namespace Express {
    interface Request {
      user?: User;
      product?: Product;
      order: OrderWithDetails;
      validatedQuery?: unknown;
    }
  }
}
