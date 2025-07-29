export interface IJwtService {
  generateToken(payload: any): string;
  verifyToken(token: string): any;
  hashPassword(password: string): Promise<string>;
  comparePassword(password: string, hashedPassword: string): Promise<boolean>;
} 