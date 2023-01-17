import { Injectable } from '@nestjs/common';
import { FindOptionsDTO } from 'src/domains/dtos';
import { IUser } from 'src/domains/interfaces';
import { IUserRepository } from 'src/domains/interfaces/user-repository.interface';
import { PrismaService } from '../config/prisma.service';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async save(data: IUser): Promise<IUser> {
    return this.prismaService.user.create({ data });
  }

  async findOne(options: FindOptionsDTO): Promise<IUser> {
    return this.prismaService.user.findUnique(options);
  }

  async findAll(): Promise<IUser[]> {
    return this.prismaService.user.findMany();
  }
}
