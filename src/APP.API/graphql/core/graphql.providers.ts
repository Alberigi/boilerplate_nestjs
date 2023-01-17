import { Provider } from '@nestjs/common';
import { IUserResolver } from 'src/DOMAIN/interfaces';
import { UserResolver } from '../resolvers/user.resolver';

export const GaphQlProviders: Provider[] = [
  {
    provide: IUserResolver,
    useClass: UserResolver,
  },
];
