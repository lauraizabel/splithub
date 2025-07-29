import { AuthResponse } from "@/modules/auth/dtos/auth-response.dto";
import { LoginDto } from "@/modules/auth/dtos/login.dto";
import { RegisterDto } from "@/modules/auth/dtos/register.dto";

export interface IAuthService {
  login(loginDto: LoginDto): Promise<AuthResponse>;
  register(registerDto: RegisterDto): Promise<AuthResponse>;
} 