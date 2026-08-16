import { User, Product } from '@shared/types/index.ts';

declare global {
  namespace Express {
    interface Request {
      user?: User;
      product?: Product;
      validatedQuery?: unknown;
    }
  }
}
