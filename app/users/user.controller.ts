import { Controller, Post } from '@nestjs/common';
import { AbstractController } from '../../libs/core/src/common/abstract.controller';
import { UsersService } from './users.service';
import { UserRegisterDto } from './dto/user-register.dto';

@Controller('users')
export class UserController extends AbstractController {
  constructor(private readonly _userService: UsersService) {
    super();
  }
  @Post()
  async create(payload: UserRegisterDto) {
    return this._userService.createOne(payload);
  }
}
