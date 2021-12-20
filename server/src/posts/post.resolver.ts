import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Post } from './models/post.model';

@Resolver(() => Post)
export class PostResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Post])
  async posts() {
    return this.prisma.post.findMany();
  }

  @Query(() => Post)
  async findPost(@Args('id') id: number) {
    return this.prisma.post.findUnique({
      where: {
        id: id
      }
    });
  }

  @Mutation(() => Post)
  async createPost(
    @Args('title') title: string,
    @Args('description') description: string,
    @Args('photo') photo: string,
    @Args('authorId') authorId: number,
  ) {
    return this.prisma.post.create({ data: { title, description, photo, authorId } });
  }
}