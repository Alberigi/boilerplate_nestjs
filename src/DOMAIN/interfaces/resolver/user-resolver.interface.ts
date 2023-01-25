import { ArgsUpdateDTO } from 'src/DOMAIN/dtos';
import { IUser } from '../user.interface';

export abstract class IUserResolver {
  abstract getUsers(): Promise<IUser[]>;
  abstract getUser(indentificator: string): Promise<IUser>;
  abstract createUser(user: IUser): Promise<IUser>;
  abstract deleteUser(indentificator: string): Promise<IUser>;
  abstract updateUser(args: ArgsUpdateDTO<IUser>): Promise<IUser>;
}
