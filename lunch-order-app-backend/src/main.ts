// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// async function bootstrap() {
//   const config = new DocumentBuilder()
//     .setTitle('Lunch Order API')
//     .setDescription('API for managing daily lunch orders')
//     .setVersion('1.0')
//     .build();

//   const app = await NestFactory.create(AppModule);
//   await app.listen(8000);

//   const document = SwaggerModule.createDocument(app, config);
//   SwaggerModule.setup('api', app, document);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Lunch Order API')
    .setDescription('API for managing daily lunch orders')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(8000);
}
bootstrap();
