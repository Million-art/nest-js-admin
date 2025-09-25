import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
 
async function bootstrap() {
  const PORT = process.env.PORT;
  const app = await NestFactory.create(AppModule);
   // Global prefix
  app.setGlobalPrefix('api'); 

  // Validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  
  // Versioning (URI)
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1', // default version if not specified
  });

  await app.listen(PORT ?? 3000);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
}
bootstrap();
