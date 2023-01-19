import { IUser } from '../user.interface';
import { IBaseService } from './base.service.interface';

export abstract class IUserService extends IBaseService<IUser> {}
