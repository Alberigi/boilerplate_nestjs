import { Provider } from '@nestjs/common';
import { IUserRepository } from 'src/DOMAIN/interfaces/repository/user-repository.interface';
import { UserRepository } from '../user.repository';

export const RepositoryProviders: Provider[] = [
  {
    provide: IUserRepository,
    useClass: UserRepository,
  },
];
