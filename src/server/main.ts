import { NestFactory } from '@nestjs/core';

import { AppModule } from '@server/AppModule';

(async (): Promise<void> => {
  const app = await NestFactory.create(AppModule);

  await app.listen(3_000);
})();
