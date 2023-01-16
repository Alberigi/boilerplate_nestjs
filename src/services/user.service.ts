import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/infra/repositorys/user.repository';
import { IUser, IUserService } from '../domains/interfaces';

@Injectable()
export class UserService implements IUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getOne(): Promise<IUser> {
    return this.userRepository.create({
      id: '131211',
      name: 'mateus',
      address: 'Arraial do cabo',
      age: 18,
    });
  }
}
