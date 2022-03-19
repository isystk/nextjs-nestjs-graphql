import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthService } from 'src/auth.service';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthenticationError } from 'apollo-server-core';

@Injectable()
export class GqlAuthGuard implements CanActivate {
  constructor(
    private auth: AuthService
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
      await this.auth.verifyToken(token);
      
      return true
  }
    
  private getRequest = (context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

}
