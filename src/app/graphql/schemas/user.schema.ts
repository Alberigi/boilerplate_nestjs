import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IUser } from 'src/domains/interfaces';

@ObjectType()
export class UserSchema implements IUser {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  address: string;

  @Field(() => Int)
  age: number;
}
