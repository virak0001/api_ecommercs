import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  Get,
  Req,
} from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthLogin } from './dto/auth-login';
import { AuthService } from './auth.service';
// import { JwtAuthGuard } from './auth.guard';
// import { AuthGuard } from '@nestjs/passport';
import { AuthGuard } from './auth.guard';
// import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() payload: AuthLogin) {
    console.info(payload);
    return this.authService.login(payload);
  }

  @Get('profile')
  @UseGuards(AuthGuard)
  public async whoAmi(): Promise<any> {
    return 'ddd';
  }
}
