import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../user/users.service';
import { JwtService } from '@nestjs/jwt';
import { TokenPayloadDto } from './dto/token-payload.dto';
import { classToPlain } from 'class-transformer';
import { HashUtil } from '@libs/core/utils/hash.util';
import { Status } from '../user/user.enum';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private _jwtService: JwtService,
  ) {}
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.repo.findOne({
      email,
      status: Status.ACTIVE,
    });
    const isPasswordValid = await HashUtil.validateHash(
      password,
      user && user.password,
    );
    if (!user || !isPasswordValid) {
      throw new BadRequestException({
        message: 'The email address or password is not correct.',
      });
    }
    return user;
  }

  async createAccessToken(user: any): Promise<any> {
    const response = new TokenPayloadDto();
    const dataToken = { dataToken: classToPlain(user) };
    const accessToken = this._jwtService.sign(dataToken);
    return { ...response, accessToken };
  }

  async logout(user: any): Promise<{ token }> {
    await this.revokeTokenForUser(user.rjwt);
    return { token: null };
  }

  async revokeTokenForUser(key: number | string): Promise<boolean> {
    try {
      // need to implement logout here
      return true;
    } catch (error) {
      return null;
    }
    return true;
  }
}
