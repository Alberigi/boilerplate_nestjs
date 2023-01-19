import { Injectable } from '@nestjs/common';
import {
  DeleteOptionsDTO,
  FindAllOptionsDTO,
  FindOptionsDTO,
  UpdateOptionsDTO,
} from 'src/DOMAIN/dtos';
import { IUser } from 'src/DOMAIN/interfaces';
import { IUserRepository } from 'src/DOMAIN/interfaces/repository/user-repository.interface';
import { PrismaService } from '../APP.DATABASE/prisma.service';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async save(data: IUser): Promise<IUser> {
    return this.prismaService.user.create({ data });
  }

  async findOne(options: FindOptionsDTO): Promise<IUser> {
    return this.prismaService.user.findUnique(options);
  }

  async findAll(options?: FindAllOptionsDTO): Promise<IUser[]> {
    return this.prismaService.user.findMany(options);
  }

  async delete(options: DeleteOptionsDTO): Promise<IUser> {
    return this.prismaService.user.delete(options);
  }

  async update(options: UpdateOptionsDTO<IUser>): Promise<IUser> {
    return this.prismaService.user.update(options);
  }
}
