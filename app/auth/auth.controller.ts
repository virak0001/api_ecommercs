import {
  Controller,
  Post,
  UseGuards,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { LocalAuthGuard } from './locale/local-auth.guard';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from '../user/users.service';
import { LoginRequest } from './dto/login-request';
import { LoginResponseDto } from './dto/login-response.dto';
import { AuthGuard } from '@libs/core/gaurd/auth.guard';
import { AuthUser } from '@libs/core/decorators/auth-user.decorator';

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

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'token null' })
  logout(@AuthUser() user: any): Promise<{ token }> {
    return this.authService.logout(user);
  }
}
