import { Module } from '@nestjs/common';
import { IUserService } from '../../DOMAIN/interfaces';
import { ServiceModule } from '../../APP.SERVICE/core/service.module';
import { UserService } from '../../APP.SERVICE/user.service';
import { UserController } from './user.controller';
import { RepositoryModule } from 'src/APP.REPOSITORY/core/repository.module';

@Module({
  imports: [ServiceModule, RepositoryModule],
  providers: [
    {
      provide: IUserService,
      useClass: UserService,
    },
  ],
  controllers: [UserController],
})
export class ControllerModule {}
