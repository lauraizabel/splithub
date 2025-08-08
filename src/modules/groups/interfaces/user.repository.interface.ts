import { UserEntity } from '../entities/user.entity';

export interface IUserRepository {
  findOne(id: string): Promise<any>;
  findByEmail(email: string): Promise<any>;
  delete(id: string): Promise<any>;
  update(user: UserEntity): Promise<any>;
  create(userData: Partial<UserEntity>, password: string): Promise<UserEntity>
} 