import { AbstractDto } from '../../../libs/core/src/common/dto/abstract.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Status } from '../user.enum';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class UserDto extends AbstractDto {
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsEmail()
  email: string;

  @IsOptional()
  avatar: string;

  @ApiPropertyOptional()
  password: string;

  @ApiPropertyOptional({ enum: Status, default: Status.INACTIVE })
  status: Status;
}
