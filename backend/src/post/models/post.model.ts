import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => ID)
  id: number;
  title: string;
  description: string;
  photo: string;
  createdAt: Date;
  updatedAt: Date;
  authorId: number;
}