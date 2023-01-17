import { Provider } from '@nestjs/common';
import { IUserService } from 'src/DOMAIN/interfaces';
import { UserService } from '../user.service';

export const ServiceProviders: Provider[] = [
  {
    provide: IUserService,
    useClass: UserService,
  },
];
