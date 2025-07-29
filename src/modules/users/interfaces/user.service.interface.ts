import { UserEntity } from '../entities/user.entity';

export interface IUserService {
  getUser(id: string): Promise<any>;
  getUserByEmail(email: string): Promise<any>;
  updateUser(user: UserEntity): Promise<any>;
  deleteUser(id: string): Promise<any>;
} 