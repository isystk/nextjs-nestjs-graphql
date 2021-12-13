import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Posts {
  @Field(() => ID)
  id: number;
  user_id: string;
  title: string;
  description: string;
  photo: string;
  regist_datetime: Date;
  update_datetime: Date;
}