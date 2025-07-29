import { AUTH_TYPES } from '@/modules/auth/di/types';
import { IAuthService } from '@/modules/auth/interfaces/auth.service.interface';
import { IJwtService } from '@/modules/auth/interfaces/jwt.service.interface';
import { AuthService } from '@/modules/auth/services/auth.service';
import { JwtService } from '@/modules/auth/services/jwt.service';
import { ContainerModule } from 'inversify';

export const authContainer = new ContainerModule(bind => {
  bind<IJwtService>(AUTH_TYPES.JwtService).to(JwtService);
  bind<IAuthService>(AUTH_TYPES.AuthService).to(AuthService);
});
