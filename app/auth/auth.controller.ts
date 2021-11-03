import { Controller, Post, UseGuards, Body, Get } from '@nestjs/common';
import { LocalAuthGuard } from './locale/local-auth.guard';
import { AuthLogin } from './dto/auth-login';
import { AuthService } from './auth.service';
import { AuthGuard } from '@libs/core/gaurd/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { AuthUser } from '@libs/core/decorators/auth-user.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UsersService } from '../users/users.service';

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
  async login(@Body() payload: AuthLogin) {
    const user = await this._userService.findOneByEmail(payload.email);
    delete user.password;
    return { ...user, ...(await this.authService.createAccessToken(user)) };
  }

  @Get('profile')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  public async whoAmI(@AuthUser() user: any): Promise<any> {
    return user;
  }
}
