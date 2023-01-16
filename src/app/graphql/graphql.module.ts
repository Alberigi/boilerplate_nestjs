import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { IUserService } from 'src/domains/interfaces';
import { InfraModule } from 'src/infra/infra.module';
import { ServiceModule } from 'src/services/service.module';
import { UserService } from 'src/services/user.service';
import { UserResolver } from './resolvers/user.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(
        process.cwd(),
        'src/app/graphql/schemas/main.graphql',
      ),
      debug: true,
      playground: true,
    }),
    ServiceModule,
    InfraModule,
  ],
  providers: [
    UserResolver,
    {
      provide: IUserService,
      useClass: UserService,
    },
  ],
})
export class GraphQlModule {}
