import { IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';
import { RoleType } from '../user.enum';
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
  @ApiProperty()
  emailOrPhone?: string;

  @IsOptional()
  is_admin: number;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(16)
  @ApiProperty()
  password: string;

  @IsOptional()
  role?: RoleType;
}
