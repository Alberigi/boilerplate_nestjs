import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/APP.DATABASE/core/database.module';
import { IUserRepository } from 'src/DOMAIN/interfaces/repository/user-repository.interface';
import { UserRepository } from '../user.repository';

@Module({
  imports: [DataBaseModule],
  providers: [
    UserRepository,
    {
      provide: IUserRepository,
      useClass: UserRepository,
    },
  ],
  exports: [
    UserRepository,
    {
      provide: IUserRepository,
      useClass: UserRepository,
    },
  ],
})
export class RepositoryModule {}
