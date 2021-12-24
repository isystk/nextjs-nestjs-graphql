import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;
  email!: string;
  password!: string;
  name: string;
}

@ObjectType()
export class UserToken {
  token!: string
}
