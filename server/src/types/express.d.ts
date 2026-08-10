import { User } from '@shared/types/user.ts';

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
