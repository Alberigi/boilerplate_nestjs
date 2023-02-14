import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/APP.REPOSITORY/core/repository.module';
import { ServiceProviders } from './service.providers';

@Module({
  imports: [RepositoryModule],
  providers: [...ServiceProviders],
  exports: [...ServiceProviders],
})
export class ServiceModule {}
