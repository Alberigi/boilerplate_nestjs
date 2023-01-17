import { Query, Resolver } from '@nestjs/graphql';
import { IUser, IUserResolver, IUserService } from 'src/DOMAIN/interfaces';
import { UserSchema } from '../schemas/user.schema';

@Resolver()
export class UserResolver implements IUserResolver {
  constructor(private readonly userService: IUserService) {}

  @Query(() => [UserSchema])
  async getUsers(): Promise<IUser[]> {
    return this.userService.getAll();
  }
}
