import { IUser } from '../user.interface';

export abstract class IUserResolver {
  abstract getUser(): Promise<IUser>;
}
