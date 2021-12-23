import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Post } from './models/post.model';
import { GqAuthGuard } from '../auth/guards/auth.guard';

@Resolver(() => Post)
export class PostResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Post])
  async getPosts() {
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

  @Mutation(() => [Post])
  @UseGuards(GqAuthGuard)
  async getMyPosts(@Args('authorId') authorId: number) {
    return this.prisma.post.findMany({
      where: {
        authorId: authorId
      }
    });
  }

  @Mutation(() => Post)
  @UseGuards(GqAuthGuard)
  async getMyPost(@Args('id') id: number) {
    return this.prisma.post.findUnique({
      where: {
        id: id
      }
    });
  }

  @Mutation(() => Post)
  @UseGuards(GqAuthGuard)
  async createPost(
      @Args('title') title: string,
      @Args('description') description: string,
      @Args('photo') photo: string,
      @Args('authorId') authorId: number,
  ) {
    return this.prisma.post.create({ data: { title, description, photo, authorId } });
  }

  @Mutation(() => Post)
  @UseGuards(GqAuthGuard)
  async updatePost(
      @Args('id') id: number,
      @Args('title') title: string,
      @Args('description') description: string,
      @Args('photo') photo: string,
      @Args('authorId') authorId: number,
  ) {
    return this.prisma.post.update({
      where: { id: id },
      data: { title, description, photo, authorId }
    });
  }

  @Mutation(() => Post)
  @UseGuards(GqAuthGuard)
  async deletePost(
    @Args('id') id: number,
  ) {
    return this.prisma.post.delete({
      where: { id: id },
    });
  }
}