import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { IUser, IUserResolver, IUserService } from 'src/DOMAIN/interfaces';
import { ArgsUpdateUser, User, UserInput } from '../schemas/user.schema';

@Resolver()
export class UserResolver implements IUserResolver {
  constructor(private readonly userService: IUserService) {}

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
    return this.userService.save(user);
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
