import { IUser } from '../user.interface';
import { IBaseController } from './base.controller.interface';

export abstract class IUserController extends IBaseController<IUser> {}
