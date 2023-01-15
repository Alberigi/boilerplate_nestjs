import { Module } from '@nestjs/common';
import { IUserService } from '../../domains/interfaces';
import { ServiceModule } from '../../services/service.module';
import { UserService } from '../../services/user.service';
import { UserController } from './user.controller';

@Module({
  imports: [ServiceModule],
  providers: [
    {
      provide: IUserService,
      useClass: UserService,
    },
  ],
  controllers: [UserController],
})
export class ControllerModule {}
