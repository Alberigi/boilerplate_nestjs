import { IUser } from './user.interface';

export abstract class IUserService {
  abstract getOne(): Promise<IUser>;
}
