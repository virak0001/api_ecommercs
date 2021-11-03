import { ApiProperty } from '@nestjs/swagger';

import { UserDto } from '../../user/dto/user.dto';
import { TokenPayloadDto } from './token-payload.dto';

export class LoginResponseDto {
  @ApiProperty({ type: UserDto })
  user: UserDto;
  @ApiProperty({ type: TokenPayloadDto })
  token: TokenPayloadDto;

  constructor(user?: UserDto, token?: TokenPayloadDto) {
    this.user = user;
    this.token = token;
  }
}
