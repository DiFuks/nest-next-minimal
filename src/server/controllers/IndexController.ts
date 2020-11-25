import { Controller, Get, Render } from '@nestjs/common';
import { IIndexPageResponse } from '../../dto/IIndexPageResponse';

@Controller()
export class IndexController {
  @Get('/')
  @Render('Index')
  public get(): IIndexPageResponse {
    return {
      title: 'Index page',
      content: 'Hello world',
    }
  }
}
