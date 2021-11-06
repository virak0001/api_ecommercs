import { Injectable } from '@nestjs/common';
// import { CreateSmDto } from './dto/create-sm.dto';
// import { UpdateSmDto } from './dto/update-sm.dto';
import { SNS } from 'aws-sdk';
import { InjectAwsService } from 'nest-aws-sdk';
@Injectable()
export class SmsService {
  constructor(@InjectAwsService(SNS) readonly sns: SNS) {}

  // sendSMS
}
