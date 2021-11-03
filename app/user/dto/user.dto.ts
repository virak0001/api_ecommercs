import { AbstractDto } from '@libs/core/common/dto/abstract.dto';
import { ApiHideProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Status } from '../user.enum';

export class UserDto extends AbstractDto {
  @ApiPropertyOptional()
  readonly name: string;

  @ApiPropertyOptional()
  email: string;

  @ApiPropertyOptional()
  avatar: string;

  @ApiHideProperty()
  password: string;

  @ApiPropertyOptional()
  mobile: string;

  @ApiPropertyOptional()
  status: Status;

  @ApiHideProperty()
  verified_at: Date;
}
