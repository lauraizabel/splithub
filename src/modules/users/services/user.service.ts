import { injectable, inject } from 'inversify';
import { USER_TYPES } from '../di/types';
import { UserEntity } from '../entities/user.entity';
import { IUserService } from '../interfaces/user.service.interface';
import { IUserRepository } from '../interfaces/user.repository.interface';
import { NotFoundError } from '@/shared/errors/not-found.error';
import { ApplicationError } from '@/shared/errors/application.error';
import { SHARED_TYPES } from '@/shared/di/types';
import { ILogger } from '@/shared/log/logger';

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject(USER_TYPES.UserRepository) private userRepository: IUserRepository,
    @inject(SHARED_TYPES.Logger) private logger: ILogger
  ) {}

  async getUser(id: string) {
    const user = await this.userRepository.findOne(id);
    
    if(!user) {
      this.logger.error(`User with ${id} ID was not found.`);
      throw new NotFoundError("User not found");
    }
    
    return user;
  }

  async getUserByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }

  async updateUser(user: UserEntity) {
    return this.userRepository.update(user);
  }

  async deleteUser(id: string) {
    return this.userRepository.delete(id);
  }
} 