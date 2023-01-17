import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { IUserService } from 'src/DOMAIN/interfaces';
import { UserService } from 'src/APP.SERVICE/user.service';
import { UserResolver } from './resolvers/user.resolver';
import { ServiceModule } from 'src/APP.SERVICE/core/service.module';
import { RepositoryModule } from 'src/APP.REPOSITORY/core/repository.module';

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
    RepositoryModule,
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
