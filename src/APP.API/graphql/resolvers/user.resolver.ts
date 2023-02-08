import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { IUser, IUserResolver, IUserService } from 'src/DOMAIN/interfaces';
import { ArgsUpdateUser, User, UserInput } from '../schemas/user.schema';
import { NEW_USER } from '../utils/subscriptions-event';

@Resolver()
export class UserResolver implements IUserResolver {
  constructor(
    private readonly userService: IUserService,
    private readonly pubSub: PubSub,
  ) {}

  @Query(() => [User])
  async getUsers(): Promise<IUser[]> {
    return this.userService.getAll();
  }

  @Query(() => User)
  async getUser(
    @Args('indentificator') indentificator: string,
  ): Promise<IUser> {
    return this.userService.getOne(indentificator);
  }

  @Mutation(() => User)
  async createUser(@Args('user') user: UserInput): Promise<IUser> {
    const userCreated = await this.userService.save(user);
    this.pubSub.publish(NEW_USER, userCreated);
    return userCreated;
  }

  @Mutation(() => User)
  async updateUser(
    @Args('args') { data, indentificator }: ArgsUpdateUser,
  ): Promise<IUser> {
    return this.userService.update(indentificator, data);
  }

  @Mutation(() => User)
  async deleteUser(
    @Args('indentificator') indentificator: string,
  ): Promise<IUser> {
    return this.userService.delete(indentificator);
  }
}
