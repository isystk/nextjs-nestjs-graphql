import { Field, ID, ObjectType } from '@nestjs/graphql';
import * as bcrypt from 'bcrypt';

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
