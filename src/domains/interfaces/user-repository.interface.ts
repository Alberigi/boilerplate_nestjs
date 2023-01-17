import { FindOptionsDTO } from '../dtos';
import { IUser } from './user.interface';

export abstract class IUserRepository {
  abstract findOne(options: FindOptionsDTO): Promise<IUser>;
  abstract save(data: IUser): Promise<IUser>;
  abstract findAll(): Promise<IUser[]>;
}
