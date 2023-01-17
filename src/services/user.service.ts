import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/infra/repositorys/user.repository';
import { IUser, IUserService } from '../domains/interfaces';

@Injectable()
export class UserService implements IUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getOne(): Promise<IUser> {
    return this.userRepository.findOne({ where: { name: 'mateus' } });
  }

  async getAll(): Promise<IUser[]> {
    return this.userRepository.findAll();
  }
}
