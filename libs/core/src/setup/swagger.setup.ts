import { INestApplication } from '@nestjs/common';
import { ConfigService } from 'nestjs-config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';

export function setupSwagger(app: INestApplication): void {
  const config = app.get(ConfigService);
  const apiDocConfig = config.get('api.doc');
  const description = `
  This is documentation for the API Endpoint.
  \nFor every request you must include in the header, Content-Type: application/json.`;

  const options = new DocumentBuilder()
    .setTitle('API Server')
    .setVersion(config.get('npm_package_version'));

  options.addBearerAuth();

  options.setDescription(description);

  const path = apiDocConfig.url;
  app.use(
    path,
    basicAuth({
      challenge: true,
      users: {
        [`${apiDocConfig.user}`]: apiDocConfig.pwd,
      },
    }),
  );
  const document = SwaggerModule.createDocument(app, options.build());
  SwaggerModule.setup(path, app, document);
}
