import { Module } from '@nestjs/common';
import { InfraModule } from 'src/infra/infra.module';
import { UserService } from './user.service';

@Module({
  imports: [InfraModule],
  providers: [UserService],
  exports: [UserService],
})
export class ServiceModule {}
