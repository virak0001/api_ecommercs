import { IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';
import {
  ApiHideProperty,
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger';

export class UserRegisterDto {
  @IsNotEmpty()
  @ApiProperty()
  readonly username: string;

  @ApiHideProperty()
  email: string;

  @IsOptional()
  @ApiPropertyOptional()
  readonly avatar?: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(16)
  @ApiProperty()
  password: string;
}
