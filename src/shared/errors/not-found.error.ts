import { IError } from '@/shared/errors/error.interface';
import StatusCode from 'http-status-codes';

export class NotFoundError extends Error implements IError {
  statusCode = StatusCode.NOT_FOUND;
  constructor(message: string) {
    super(message);
  }
}