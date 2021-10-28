import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { UserLogin } from './dto/user-login';

@Controller('user')
export class UserController {
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() payload: UserLogin) {
    return payload;
  }
}
