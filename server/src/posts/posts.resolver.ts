import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma.service';
import { Posts } from './models/posts.model';

@Resolver(() => Posts)
export class PostsResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Posts])
  async posts() {
    return this.prisma.posts.findMany();
  }

  @Mutation(() => Posts)
  async createPost(
    @Args('title') title: string,
    @Args('description') description: string,
    @Args('photo') photo: string,
    @Args('user_id') user_id: string,
  ) {
    return this.prisma.posts.create({ data: { title, description, photo, user_id } });
  }
}