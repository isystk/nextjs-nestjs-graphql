import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards, Req } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User, UserToken } from './models/user.model';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { ApolloServer, UserInputError, AuthenticationError } from 'apollo-server-express';
import { GqAuthGuard } from '../auth/guards/auth.guard';

type JWT_TOKEN = {
  id: number
  email: string
}

// パスワードをハッシュ化する
const generatePasswordHash = async (password: string) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};
// パスワードをチェックする
const validatePassword = async (user:User, password: string) => {
  return await bcrypt.compare(password, user.password);
};

// ユーザトークンを生成する
const createToken = async (user: User, secret: string, expiresIn: string) => {
  const { id, email }: JWT_TOKEN = user;
  return await jwt.sign({ id, email }, secret, { expiresIn });
};

@Resolver(() => User)
export class UserResolver {
  constructor(private prisma: PrismaService) {}

  // 会員登録
  @Mutation(() => UserToken)
  async signup(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name') name: string,
  ) {
    
    password = await generatePasswordHash(password);
    
    const user = await this.prisma.user.create({ data: {email, password, name}});
    return { token: createToken(user, 'my_secret',   '24h' ) };
  }

  // ログイン
  @Mutation(() => UserToken)
  async signin(
      @Args('email') email: string,
      @Args('password') password: string,
  ) {

    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new UserInputError('No user found with this login credentials.');

    const isValid = await validatePassword(user, password);
    if (!isValid) throw new AuthenticationError('Invalid password.');

    return { token: createToken(user, 'my_secret',   '24h' ) };
  }

  // 認証
  @Mutation(() => User)
  @UseGuards(GqAuthGuard)
  async auth(
      @Args('token') token: string,
  ) {
    // トークンの検証
    return await jwt.verify(token, 'my_secret', async (err: any, decoded: JWT_TOKEN) => {
      if (err) {
        throw new AuthenticationError('Invalid password. ' + err);
      } else {
        // OK
        console.log( `OK: decoded.id=[${decoded.id}], email=[${decoded.email}]` );

        const user = await this.prisma.user.findUnique({ where: { email: decoded.email } });
        if (!user) throw new UserInputError('No user found with this login credentials.');
        
        return user
      }
    });
  }


}
