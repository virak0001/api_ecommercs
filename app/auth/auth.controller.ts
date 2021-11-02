import { Controller, Post, UseGuards, Body, Get } from '@nestjs/common';
import { LocalAuthGuard } from './locale/local-auth.guard';
import { AuthLogin } from './dto/auth-login';
import { AuthService } from './auth.service';
import { AuthGuard } from '@libs/core/gaurd/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { AuthUser } from '@libs/core/decorators/auth-user.decorator';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly _jwtService: JwtService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() payload: AuthLogin) {
    return this.authService.createAccessToken(payload);
  }

  @Get('profile')
  @UseGuards(AuthGuard)
  public async whoAmI(@AuthUser() user: any): Promise<any> {
    return user;
  }
}
