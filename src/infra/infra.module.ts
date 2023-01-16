import { Module } from '@nestjs/common';
import { PrismaService } from './config/prisma.service';
import { UserRepository } from './repositorys/user.repository';

@Module({
  imports: [],
  providers: [PrismaService, UserRepository],
  exports: [PrismaService, UserRepository],
})
export class InfraModule {}
