import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from 'express';

@Injectable()
export class FormatResponse implements NestInterceptor {
  public constructor(private readonly pageFileName: string) {}

  public intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<unknown> {
    const response: Response = context.switchToHttp().getResponse();

    return next
      .handle()
      .pipe(map((payload) => response.render(this.pageFileName, payload)));
  }
}
