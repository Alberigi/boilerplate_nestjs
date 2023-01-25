import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { ArgsUpdateDTO } from 'src/DOMAIN/dtos';
import { IUser } from 'src/DOMAIN/interfaces';

@ObjectType()
export class User implements IUser {
  @Field()
  id?: string;

  @Field()
  name: string;

  @Field()
  address: string;

  @Field(() => Int)
  age: number;
}

@InputType()
export class UserInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  address?: string;

  @Field(() => Int, { nullable: true })
  age?: number;
}

@InputType()
export class ArgsUpdateUser implements ArgsUpdateDTO<UserInput> {
  @Field()
  indentificator: string;

  @Field()
  data: UserInput;
}
