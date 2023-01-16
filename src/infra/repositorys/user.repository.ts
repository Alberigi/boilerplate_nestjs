import { Injectable } from '@nestjs/common';
import { IUser } from 'src/domains/interfaces';
import { PrismaService } from '../config/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(userData: IUser): Promise<IUser> {
    return this.prismaService.user.create({ data: userData });
  }
}
