import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Status } from '../user.enum';
import { ApiHideProperty } from '@nestjs/swagger';

export class UserRegisterDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsOptional()
  readonly avatar?: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(16)
  password: string;

  @ApiHideProperty()
  status: Status;
}
