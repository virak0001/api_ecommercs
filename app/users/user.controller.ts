import { Body, Controller, Post } from '@nestjs/common';
import { AbstractController } from '@libs/core/common/abstract.controller';
import { UsersService } from './users.service';
import { UserRegisterDto } from './dto/user-register.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UserController extends AbstractController {
  constructor(private readonly _userService: UsersService) {
    super();
  }

  @Post()
  async create(@Body() payload: UserRegisterDto) {
    return this._userService.createOne(payload);
  }
}
