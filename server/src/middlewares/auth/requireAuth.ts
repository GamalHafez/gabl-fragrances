import { authService } from '@/modules/auth/auth.service.js';
import { AppError } from '@/utils/response.js';
import { verifyAccessToken } from '@/utils/tokens.js';
import type { Request, Response, NextFunction } from 'express';

export const requireAuth = async (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  try {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
      throw new AppError(401, 'Authentication required');
    }

    const payload = verifyAccessToken(accessToken);

    const user = await authService.findUser({ id: payload.sub }, true);

    if (!user) {
      throw new AppError(401, 'Unauthorized');
    }

    req.user = user;
    next();
  } catch (error) {
    next(error instanceof AppError ? error : new AppError(401, 'Unauthorized'));
  }
};

export const attachUserIfPresent = async (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  try {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) return next(); // no token, proceed as guest

    const payload = verifyAccessToken(accessToken);
    const user = await authService.findUser({ id: payload.sub }, true);
    if (user) req.user = user;
    next();
  } catch {
    next(); // invalid/expired token → treat as guest, don't hard-fail
  }
};
