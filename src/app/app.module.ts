import { Module } from '@nestjs/common';
import { ControllerModule } from './controllers/controller.module';
import { GraphQlModule } from './graphql/graphql.module';

@Module({
  imports: [ControllerModule, GraphQlModule],
})
export class AppModule {}
