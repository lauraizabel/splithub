import { IError } from "@/shared/errors/error.interface";
import StatusCodes from "http-status-codes";

export class ApplicationError extends Error implements IError {
  statusCode = StatusCodes.BAD_REQUEST;

  constructor(message: string) {
    super(message);
  }
} 