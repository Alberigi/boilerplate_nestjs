import { Module } from '@nestjs/common';
import { ControllerModule } from '../controllers/core/controller.module';
import { GraphQlModule } from '../graphql/core/graphql.module';

@Module({
  imports: [ControllerModule, GraphQlModule],
})
export class AppModule {}
