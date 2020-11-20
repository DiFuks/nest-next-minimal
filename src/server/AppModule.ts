import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import path from 'path';
import fs from 'fs';

import { IndexController } from '@server/controllers/IndexController';

const next = Next({
  dev: process.env.NODE_ENV !== 'production',
  dir: path.resolve(__dirname, '../..'),
});

const projectPath = path.resolve(__dirname, '../..');

next.serveStatic = async (req, res: any) => {
  if (!req.url) {
    res.send();

    return;
  }

  const filePath = path.join(projectPath, req.url.replace('_next', '.next').replace(/\?ts=\d+/, ''));

  const fileContent = fs.readFileSync(filePath);

  res.send(fileContent);
}

@Module({
  imports: [
    RenderModule.forRootAsync(next),
  ],
  controllers: [IndexController],
})
export class AppModule {}
