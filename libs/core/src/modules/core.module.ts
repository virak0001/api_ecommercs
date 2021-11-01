import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from 'nestjs-config';
import { SharedModule } from './shared.module';
@Module({
  imports: [
    SharedModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
  ],
})
export class CoreModule {}
