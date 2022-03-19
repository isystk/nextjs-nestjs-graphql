import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { AuthService } from '../auth.service';
import { User, UserToken } from './models/user.model';
import { UserInputError, AuthenticationError } from 'apollo-server-express';
import { GqlAuthGuard } from '../auth/guards/auth.guard';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private prisma: PrismaService,
    private authService: AuthService
  ) {}

  // 会員登録
  @Mutation(() => UserToken)
  async signup(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name') name: string,
  ) {
    
    password = await this.authService.generatePasswordHash(password);
    
    const user = await this.prisma.user.create({ data: {email, password, name}});
    return { token: this.authService.createToken(user) };
  }

  // ログイン
  @Mutation(() => UserToken)
  async signin(
      @Args('email') email: string,
      @Args('password') password: string,
  ) {

    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new UserInputError('No user found with this login credentials.');

    const isValid = await this.authService.validatePassword(user, password);
    if (!isValid) throw new AuthenticationError('Invalid password.');

    return { token: this.authService.createToken(user) };
  }

  // 認証
  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async auth(
      @Args('token') token: string,
  ) {
    // トークンの検証
    return await this.authService.verifyToken(token);
  }

}
