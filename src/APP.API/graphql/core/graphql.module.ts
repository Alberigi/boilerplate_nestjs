import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
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
      subscriptions: {
        'graphql-ws': true,
        'subscriptions-transport-ws': true,
      },
    }),
    ServiceModule,
  ],
  providers: [...GaphQlProviders],
  exports: [...GaphQlProviders],
})
export class GraphQlModule {}
