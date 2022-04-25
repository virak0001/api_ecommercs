import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { LocalAuthGuard } from './locale/local-auth.guard';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from '../user/users.service';
import { LoginRequest } from './dto/login-request';
import { LoginResponseDto } from './dto/login-response.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly _jwtService: JwtService,
    private readonly _userService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOkResponse({
    type: LoginResponseDto,
    description: 'Profile info',
  })
  async login(@Body() payload: LoginRequest): Promise<LoginResponseDto> {
    console.warn(payload);
    const user = await this._userService.findOneByEmail(payload.email);
    const token = await this.authService.createAccessToken(user);
    return {
      user: user,
      token,
    };
  }
}
