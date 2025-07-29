import { injectable, inject } from 'inversify';
import { IUserRepository } from '@/modules/users/interfaces/user.repository.interface';
import { UnauthorizedError } from '@/shared/errors/unauthorized.error';
import { IJwtService } from '@/modules/auth/interfaces/jwt.service.interface';
import { AuthResponse } from '@/modules/auth/dtos/auth-response.dto';
import { LoginDto } from '@/modules/auth/dtos/login.dto';
import { RegisterDto } from '@/modules/auth/dtos/register.dto';
import { ApplicationError } from '@/shared/errors/application.error';
import { IAuthService } from '@/modules/auth/interfaces/auth.service.interface';
import { AUTH_TYPES } from '@/modules/auth/di/types';
import { USER_TYPES } from '@/modules/users/di/types';

@injectable()
export class AuthService implements IAuthService {
  constructor(
    @inject(AUTH_TYPES.JwtService) private jwtService: IJwtService,
    @inject(USER_TYPES.UserRepository) private userRepository: IUserRepository
  ) {}

  async login(loginDto: LoginDto): Promise<AuthResponse> {
    const user = await this.userRepository.findByEmail(loginDto.email);

    if (!user) {
      throw new UnauthorizedError('Invalid credentials');
    }

    const isPasswordValid = await this.jwtService.comparePassword(
      loginDto.password,
      user.password
    );

    if (!isPasswordValid) {
      throw new UnauthorizedError('Invalid credentials');
    }

    const token = this.jwtService.generateToken({
      id: user.id,
      email: user.email,
    });

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }

  async register(registerDto: RegisterDto): Promise<AuthResponse> {
    const existingUser = await this.userRepository.findByEmail(
      registerDto.email
    );

    if (existingUser) {
      throw new ApplicationError('User already exists');
    }

    const hashedPassword = await this.jwtService.hashPassword(
      registerDto.password
    );

    const user = await this.userRepository.create(
      {
        name: registerDto.name,
        email: registerDto.email,
      },
      hashedPassword
    );

    const token = this.jwtService.generateToken({
      id: user.getId(),
      email: user.email,
    });

    return {
      token,
      user: {
        id: user.getId(),
        name: user.name,
        email: user.email,
      },
    };
  }
}
