import { AUTH_TYPES } from '@/modules/auth/di/types';
import { RegisterDto } from '@/modules/auth/dtos/register.dto';
import { IAuthService } from '@/modules/auth/interfaces/auth.service.interface';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { inject } from 'inversify';
import {
  Controller,
  controller,
  httpPost,
  request,
  response,
} from 'inversify-express-utils';

@controller('/auth')
export class AuthController implements Controller {
  constructor(
    @inject(AUTH_TYPES.AuthService) private authService: IAuthService
  ) {}

  @httpPost('register')
  private async register(
    @request() request: Request,
    @response() response: Response
  ) {
    const user = request.body as RegisterDto;
    const result = await this.authService.register(user);
    return response.status(StatusCodes.CREATED).json(result);
  }

  @httpPost('login')
  private async login(
    @request() request: Request,
    @response() response: Response
  ) {
    const { email, password } = request.body;
    const result = await this.authService.login({ email, password });
    return response.json(result);
  }
}
