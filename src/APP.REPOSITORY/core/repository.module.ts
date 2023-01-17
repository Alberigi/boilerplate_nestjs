import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/APP.DATABASE/core/database.module';
import { UserRepository } from '../user.repository';
import { RepositoryProviders } from './repository.providers';

@Module({
  imports: [DataBaseModule],
  providers: [UserRepository, ...RepositoryProviders],
  exports: [UserRepository, ...RepositoryProviders],
})
export class RepositoryModule {}
