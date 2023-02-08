import { Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { ISubscriptionResolver, IUser } from 'src/DOMAIN/interfaces';
import { User } from '../schemas/user.schema';
import { NEW_USER } from '../utils/subscriptions-event';

@Resolver()
export class SubscriptionResolver implements ISubscriptionResolver {
  constructor(private readonly pubSub: PubSub) {}

  @Subscription(() => User, {
    resolve(payload: IUser) {
      return payload;
    },
  })
  newUser(): AsyncIterator<IUser> {
    return this.pubSub.asyncIterator(NEW_USER);
  }
}
