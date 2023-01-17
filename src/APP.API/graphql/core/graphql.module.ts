import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UserResolver } from '../resolvers/user.resolver';
import { ServiceModule } from 'src/APP.SERVICE/core/service.module';
import { GaphQlProviders } from './graphql.providers';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(
        process.cwd(),
        'src/APP.API/graphql/schemas/main.graphql',
      ),
      debug: true,
      playground: true,
    }),
    ServiceModule,
  ],
  providers: [UserResolver, ...GaphQlProviders],
  exports: [UserResolver, ...GaphQlProviders],
})
export class GraphQlModule {}
