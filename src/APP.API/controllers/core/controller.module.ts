import { Module } from '@nestjs/common';
import { ServiceModule } from '../../../APP.SERVICE/core/service.module';
import { UserController } from '../user.controller';
import { RepositoryModule } from 'src/APP.REPOSITORY/core/repository.module';

@Module({
  imports: [ServiceModule, RepositoryModule],
  controllers: [UserController],
})
export class ControllerModule {}
