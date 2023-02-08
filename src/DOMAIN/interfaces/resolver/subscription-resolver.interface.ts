import { IUser } from '../user.interface';

export abstract class ISubscriptionResolver {
  abstract newUser(): AsyncIterator<IUser>;
}
