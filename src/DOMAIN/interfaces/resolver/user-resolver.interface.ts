import { IUser } from '../user.interface';

export abstract class IUserResolver {
  abstract getUsers(): Promise<IUser[]>;
}
