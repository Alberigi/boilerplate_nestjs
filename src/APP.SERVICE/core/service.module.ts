import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/APP.REPOSITORY/core/repository.module';
import { UserService } from '../user.service';
import { ServiceProviders } from './service.providers';

@Module({
  imports: [RepositoryModule],
  providers: [UserService, ...ServiceProviders],
  exports: [UserService, ...ServiceProviders],
})
export class ServiceModule {}
