import { Module } from '@nestjs/common';
import { SmsService } from './sms.service';
import { SmsController } from './sms.controller';
import { AwsSdkModule } from 'nest-aws-sdk';
import { SNS } from 'aws-sdk';
import { ConfigModule, ConfigService } from 'nestjs-config';
@Module({
  imports: [
    ConfigModule,
    SmsService,
    AwsSdkModule.forRootAsync({
      defaultServiceOptions: {
        useFactory: (cs: ConfigService) => {
          return {
            // region: cs.get('sms.key.AWS_REGION'),
            region: 'ap-southeast-2',
            credentials: {
              accessKeyId: cs.get('sms.key.AWS_ACCESS_KEY_ID'),
              secretAccessKey: cs.get('sms.key.AWS_SECRET_ACCESS_KEY'),
            },
          };
        },
        inject: [ConfigService],
      },
      services: [SNS],
    }),
  ],
  controllers: [SmsController],
  providers: [SmsService],
  exports: [SmsService],
})
export class SmsModule {}
