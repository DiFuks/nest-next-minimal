import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import path from 'path';

import { IndexController } from '@server/controllers/IndexController';

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({
        dev: process.env.NODE_ENV !== 'production',
        dir: path.resolve(__dirname, '../..'),
      }),
    ),
  ],
  controllers: [IndexController],
})
export class AppModule {}
