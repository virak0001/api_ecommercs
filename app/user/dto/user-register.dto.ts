import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';
import { RoleType } from '../user.enum';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserRegisterDto {
  @IsNotEmpty()
  @ApiProperty()
  readonly username: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  readonly email: string;

  @IsOptional()
  @ApiPropertyOptional()
  readonly avatar?: string;

  @IsOptional()
  @ApiPropertyOptional()
  readonly mobile?: string;

  @IsOptional()
  @ApiPropertyOptional()
  is_admin: number;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(16)
  @ApiProperty()
  password: string;

  @IsOptional()
  role?: RoleType;
}
