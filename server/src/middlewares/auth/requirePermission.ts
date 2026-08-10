import type { Request, Response, NextFunction } from 'express';
import { prisma } from '@/config/db.js';
import { AppError } from '@/utils/response.js';

export const requirePermission = (permission: string) => {
  return async (req: Request, _res: Response, next: NextFunction) => {
    try {
      const roleId = req.user?.role.id;

      if (!roleId) {
        throw new AppError(401, 'Authentication required');
      }

      const isAllowed = await prisma.rolePermission.findFirst({
        where: {
          roleId,
          permission: {
            name: permission,
          },
        },
        select: {
          roleId: true,
        },
      });

      if (!isAllowed) {
        throw new AppError(403, 'Forbidden');
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};
