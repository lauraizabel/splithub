import appContainer from '@/shared/container/app.container';
import { SHARED_TYPES } from '@/shared/di/types';
import { ApplicationError } from '@/shared/errors/application.error';
import { NotFoundError } from '@/shared/errors/not-found.error';
import { ILogger } from '@/shared/log/logger';
import { NextFunction, Request, Response } from 'express';

const logger = appContainer.get<ILogger>(SHARED_TYPES.Logger);

export const errorHandler = (
  error: ApplicationError | NotFoundError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;

  if (error instanceof ApplicationError || error instanceof NotFoundError) {
    statusCode = error.statusCode;
  }
  const message = error.message || 'Erro interno do servidor';
  logger.error(message, error);
  res.status(statusCode).json({
    error: {
      message,
      statusCode,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    },
  });
};
