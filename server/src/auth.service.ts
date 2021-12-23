import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AuthenticationError } from 'apollo-server-core';
import { ApolloServer, UserInputError } from 'apollo-server-express';
import { User } from './user/models/user.model';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

type JWT_TOKEN = {
  id: number
  email: string
}

const initial = {
  secret: 'my_secret',
  expiresIn: '24h'
}

@Injectable()
export class AuthService {
  constructor(
      private prisma: PrismaService
  ) {}

  // パスワードをハッシュ化する
  public generatePasswordHash = async (password: string) => {
      const saltRounds = 10;
      return await bcrypt.hash(password, saltRounds);
  }

  // パスワードをチェックする
  public validatePassword = async (user: User, password: string) => {
      return await bcrypt.compare(password, user.password);
  }

  // ユーザトークンを生成する
  public createToken = async (user: User) => {
      const { id, email }: JWT_TOKEN = user;
      return await jwt.sign({ id, email }, initial.secret, { expiresIn: initial.expiresIn });
  }

  // JWTトークンを公開鍵で検証する
  public verifyToken = async (token: string) => {
      return await jwt.verify(token, 'my_secret', async (err: any, decoded: JWT_TOKEN) => {
          if (err) {
              throw new AuthenticationError('Invalid password. ' + err);
          } else {
              // OK
              console.log(`OK: decoded.id=[${decoded.id}], email=[${decoded.email}]`);

              const user = await this.prisma.user.findUnique({where: {email: decoded.email}});
              if (!user) throw new UserInputError('No user found with this login credentials.');

              return user
          }
      })
  }
}
