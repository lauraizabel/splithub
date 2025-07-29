import StatusCode from 'http-status-codes';

export class UnauthorizedError extends Error {
  statusCode = StatusCode.UNAUTHORIZED;
  constructor(message: string = 'Unauthorized') {
    super(message);
  }
} 