import { BadRequestException, Injectable } from "@nestjs/common";
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { TokenPayloadDto } from './dto/token-payload.dto';
import { classToPlain } from 'class-transformer';
import { HashUtil } from '../../libs/core/src/utils/hash.util';
import { Status } from "../users/user.enum";

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
    const token = this._jwtService.sign(dataToken);
    return { ...response, token };
  }
}
