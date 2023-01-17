import { Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/DOMAIN/interfaces/repository/user-repository.interface';
import { IUser, IUserService } from '../DOMAIN/interfaces';

@Injectable()
export class UserService implements IUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async getOne(): Promise<IUser> {
    return this.userRepository.findOne({ where: { name: 'mateus' } });
  }

  async getAll(): Promise<IUser[]> {
    return this.userRepository.findAll();
  }
}
