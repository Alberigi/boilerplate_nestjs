import { Provider } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { ISubscriptionResolver, IUserResolver } from 'src/DOMAIN/interfaces';
import { SubscriptionResolver } from '../resolvers/subscription.resolver';
import { UserResolver } from '../resolvers/user.resolver';

export const GaphQlProviders: Provider[] = [
  {
    provide: IUserResolver,
    useClass: UserResolver,
  },
  {
    provide: ISubscriptionResolver,
    useClass: SubscriptionResolver,
  },
  PubSub,
];
