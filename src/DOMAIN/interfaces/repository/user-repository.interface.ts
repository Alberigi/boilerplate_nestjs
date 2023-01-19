import { IUser } from '../user.interface';
import { IBaseRepository } from './base.repository.interface';

export abstract class IUserRepository extends IBaseRepository<IUser> {}
