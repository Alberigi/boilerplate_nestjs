import { Injectable } from '@nestjs/common';
import { IUser, IUserService } from '../domains/interfaces';

@Injectable()
export class UserService implements IUserService {
  getOne(): IUser {
    return {
      id: '131211',
      name: 'mateus',
      address: 'Arraial do cabo',
      age: 18,
    };
  }
}
