import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AuthLogin } from './dto/auth-login';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() payload: AuthLogin) {
    return this.authService.login(payload);
  }
}
