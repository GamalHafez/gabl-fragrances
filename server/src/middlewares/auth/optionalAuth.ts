import { authService } from '@/services/auth.service.js';
import { verifyAccessToken } from '@/utils/tokens.js';
import type { Request, Response, NextFunction } from 'express';

export const optionalAuth = async (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  try {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
      return next();
    }

    const payload = verifyAccessToken(accessToken);

    const user = await authService.findUser({ id: payload.sub }, true);

    req.user = user!;

    next();
  } catch {
    // Invalid/expired token shouldn't prevent a guest review.
    next();
  }
};
