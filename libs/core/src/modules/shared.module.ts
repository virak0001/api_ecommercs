import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { NestEventModule } from 'nest-event';
import { ConfigModule } from 'nestjs-config';
import { resolve } from 'path';

@Global()
@Module({
  imports: [
    ConfigModule.load(resolve('config', '**/!(*.d).{ts,js}')),
    HttpModule,
    NestEventModule,
  ],
  exports: [HttpModule, NestEventModule],
})
export class SharedModule {}
