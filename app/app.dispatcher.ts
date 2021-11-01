import { NestExpressApplication } from '@nestjs/platform-express';
import { AppLogger } from 'libs/core/src/app.logger';
import { ConfigService } from 'nestjs-config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestApplicationOptions, ValidationPipe } from '@nestjs/common';
import fs from 'fs';
declare const module: any;
export class AppDispatcher {
  private _app: NestExpressApplication;
  private _logger = new AppLogger(AppDispatcher.name);
  private _config: ConfigService;
  async dispatch(): Promise<void> {
    await this._createServer();
    await this._startServer();
    if (module.hot) {
      module.hot.accept();
      await module.hot.dispose(() => this._app.close());
    }
  }
  private async _createServer() {
    const key = process.env.SSL_KEY;
    const cert = process.env.SSL_CERT;
    const options: NestApplicationOptions = {
      bodyParser: true,
      logger: new AppLogger('PMS'),
    };
    if (key && cert) {
      const httpsOptions = {
        key: fs.readFileSync(key),
        cert: fs.readFileSync(cert),
      };
      Object.assign(options, { httpsOptions });
    }

    this._app = await NestFactory.create<NestExpressApplication>(
      AppModule,
      options,
    );
    console.info(this._app.get(ConfigService));
    this._config = this._app.get(ConfigService);
  }
  private async _startServer(): Promise<void> {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    const host = this._config.get('app.host');
    const port = +this._config.get('app.port');
    await this._app.listen(port, host);
    this._logger.log(`Server is listening https://${host}:${port}`);
  }
}
