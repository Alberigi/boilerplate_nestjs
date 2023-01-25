import { Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/DOMAIN/interfaces/repository/user-repository.interface';
import { IUser, IUserService } from '../DOMAIN/interfaces';

@Injectable()
export class UserService implements IUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async getOne(indentificator: string | number): Promise<IUser> {
    return this.userRepository.findOne({ where: { id: indentificator } });
  }

  async getAll(): Promise<IUser[]> {
    return this.userRepository.findAll();
  }

  async save(data: Partial<IUser>): Promise<IUser> {
    return this.userRepository.save(data);
  }

  async update(
    indentificator: string | number,
    data: Partial<IUser>,
  ): Promise<IUser> {
    return this.userRepository.update({ where: { id: indentificator }, data });
  }

  async delete(indentificator: string | number): Promise<IUser> {
    return this.userRepository.delete({ where: { id: indentificator } });
  }
}
