import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AbstractController } from '@libs/core/common/abstract.controller';
import { UsersService } from '../users.service';
import { UserRegisterDto } from '../dto/user-register.dto';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from '../entities/user.entity';
import { AuthGuard } from '@libs/core/gaurd/auth.guard';
import { AuthUser } from '@libs/core/decorators/auth-user.decorator';
import { UserDto } from '../dto/user.dto';

@Controller()
@ApiTags('users')
export class UserController extends AbstractController {
  constructor(private readonly _userService: UsersService) {
    super();
  }

  @Post('users')
  async create(@Body() payload: UserRegisterDto): Promise<any> {
    // return this._userService.createOne(payload);
    return payload;
  }

  @Get('profile')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiOkResponse({
    type: UserDto,
    description: 'Profile info',
  })
  public async whoAmI(@AuthUser() user: any): Promise<UserDto> {
    return user;
  }
}
