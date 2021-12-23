import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PrismaService } from 'src/prisma.service';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { AuthenticationError } from 'apollo-server-core';
import * as jwt from 'jsonwebtoken';
import { ApolloServer, UserInputError } from 'apollo-server-express';

type JWT_TOKEN = {
  id: number
  email: string
}

@Injectable()
export class GqAuthGuard implements CanActivate {
  constructor(
      private prisma: PrismaService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
      const req = this.getRequest(context);

      // headerからtokenを取得
      const authHeader = req.headers.authorization as string;
      if (!authHeader) {
          throw new AuthenticationError('Authorization header not found.');
      }
      const [type, token] = authHeader.split(' ');
      if (type !== 'Bearer') {
          throw new AuthenticationError(`Authentication type \'Bearer\' required. Found \'${type}\'`);
      }

      // JWTトークンを公開鍵で検証する
      await jwt.verify(token, 'my_secret', async (err: any, decoded: JWT_TOKEN) => {
        if (err) {
          throw new AuthenticationError('Invalid password. ' + err);
        }
        // OK
        console.log( `OK: decoded.id=[${decoded.id}], email=[${decoded.email}]` );

        const user = await this.prisma.user.findUnique({ where: { email: decoded.email } });
        if (!user) throw new AuthenticationError('No user found with this login credentials.');
      });
      
      return true
  }
    
  private getRequest = (context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
