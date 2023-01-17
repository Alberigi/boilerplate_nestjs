import { Module } from '@nestjs/common';
import { IUserRepository } from 'src/domains/interfaces/user-repository.interface';
import { PrismaService } from './config/prisma.service';
import { UserRepository } from './repositorys/user.repository';

@Module({
  imports: [],
  providers: [
    PrismaService,
    UserRepository,
    {
      provide: IUserRepository,
      useClass: UserRepository,
    },
  ],
  exports: [
    PrismaService,
    UserRepository,
    {
      provide: IUserRepository,
      useClass: UserRepository,
    },
  ],
})
export class InfraModule {}
