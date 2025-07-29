import { Request, Response, NextFunction } from 'express';
import { UnauthorizedError } from '../errors/unauthorized.error';
import { appContainer } from '@/shared/container/app.container';
import { IJwtService } from '@/modules/auth/interfaces/jwt.service.interface';
import { AUTH_TYPES } from '@/modules/auth/di/types';

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    const tokenHeader = 'Bearer';
    if (!authHeader || !authHeader.startsWith(tokenHeader)) {
      throw new UnauthorizedError('No token provided');
    }

    const token = authHeader.substring(tokenHeader.length).trim();
    const jwtService = appContainer.get<IJwtService>(AUTH_TYPES.JwtService);

    const decoded = jwtService.verifyToken(token);
    (req as any).user = decoded;

    next();
  } catch (error) {
    next(new UnauthorizedError('Invalid token'));
  }
};
