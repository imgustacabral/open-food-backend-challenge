import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers.authorization?.split(' ')[1];

    if (!apiKey) {
      throw new UnauthorizedException('API Key not found');
    }
    if (apiKey === process.env.API_KEY) {
      return true;
    } else {
      throw new UnauthorizedException('Invalid API Key');
    }
  }
}
