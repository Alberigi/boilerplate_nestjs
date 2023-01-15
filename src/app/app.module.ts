import { Module } from '@nestjs/common';
import { ControllerModule } from 'src/controllers/controller.module';

@Module({
  imports: [ControllerModule],
})
export class AppModule {}
