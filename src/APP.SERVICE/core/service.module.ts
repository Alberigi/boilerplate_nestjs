import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/APP.REPOSITORY/core/repository.module';
import { UserService } from '../user.service';

@Module({
  imports: [RepositoryModule],
  providers: [UserService],
  exports: [UserService],
})
export class ServiceModule {}
