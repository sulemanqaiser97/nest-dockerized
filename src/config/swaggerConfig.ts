import { DocumentBuilder } from '@nestjs/swagger';

const swaggerConfig = new DocumentBuilder()
  .setTitle('Nest Application')
  .setDescription('RestApis')
  .setVersion('1.1.0')
  .addTag('Endpoints')
  .build();

export { swaggerConfig };
