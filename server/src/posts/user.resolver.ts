import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma.service';
import { User, UserToken } from './models/user.model';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

// パスワードをハッシュ化する
const generatePasswordHash = async (password: string) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

// ユーザトークンを生成する
const createToken = async (user: User, secret: string, expiresIn: string) => {
  const { id, email } = user;
  return await jwt.sign({ id, email }, secret, { expiresIn });
};

@Resolver(() => User)
export class UserResolver {
  constructor(private prisma: PrismaService) {}

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
}
