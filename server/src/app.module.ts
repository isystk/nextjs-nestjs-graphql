import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from './prisma.service';
import { AuthService } from './auth.service';
import { PostResolver } from './post/post.resolver';
import { UserResolver } from './user/user.resolver';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, AuthService, PostResolver, UserResolver],
})
export class AppModule {}
