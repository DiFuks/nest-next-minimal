import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { FormatResponse } from '@server/interceptors/FormatResponse';

@Controller()
export class IndexController {
  @Get('/')
  @UseInterceptors(new FormatResponse('Index'))
  public get(): void {}
}
