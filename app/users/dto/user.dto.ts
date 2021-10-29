import { AbstractDto } from '../../../libs/core/src/common/dto/abstract.dto';
import { ApiHideProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Status } from '../user.enum';

export class UserDto extends AbstractDto {
  @ApiPropertyOptional()
  readonly name: string;

  @ApiPropertyOptional()
  email: string;

  @ApiPropertyOptional()
  avatar: string;

  @ApiPropertyOptional()
  password: string;

  @ApiPropertyOptional({ enum: Status })
  status: Status;

  @ApiHideProperty()
  verified_at: Date;
}
