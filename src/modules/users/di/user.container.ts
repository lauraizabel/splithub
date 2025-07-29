import { ContainerModule } from 'inversify';
import { USER_TYPES } from './types';
import { UserService } from '../services/user.service';
import { UserRepository } from '../repository/user.repository';
import { IUserService } from '../interfaces/user.service.interface';
import { IUserRepository } from '../interfaces/user.repository.interface';

export const userContainer = new ContainerModule((bind) => {
  bind<IUserService>(USER_TYPES.UserService).to(UserService);
  bind<IUserRepository>(USER_TYPES.UserRepository).to(UserRepository);
}); 