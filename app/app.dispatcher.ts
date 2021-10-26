import { NestExpressApplication } from '@nestjs/platform-express';
import { AppLogger } from 'libs/core/src/app.logger';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
declare const module: any;
export class AppDispatcher {
  private _app: NestExpressApplication;
  private _logger = new AppLogger(AppDispatcher.name);
  async dispatch(): Promise<void> {
    await this._startServer();
    if (module.hot) {
      module.hot.accept();
      await module.hot.dispose(() => this._app.close());
    }
  }
  private async _startServer(): Promise<void> {
    const app = await NestFactory.create(AppModule);
    const config = app.get(ConfigService);
    const host = config.get('host');
    const port = +config.get('port');
    await app.listen(port, host);
    this._logger.log(`Server is listening https://${host}:${port}`);
  }
}
