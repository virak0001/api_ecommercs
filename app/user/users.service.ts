import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserRegisterDto } from './dto/user-register.dto';
import { UserEntity } from './entities/user.entity';
import { HashUtil } from '@libs/core/utils/hash.util';
@Injectable()
export class UsersService {
  constructor(public repo: UserRepository) {}

  async findIsExist(email: string): Promise<any> {
    const user = await this.repo.findOne({ email });
    if (user) {
      throw new HttpException(
        {
          error: 'User',
          message: 'Email is already exist.',
        },
        HttpStatus.PRECONDITION_FAILED,
      );
    }
    return user;
  }

  async findIsPhoneExist(phone: string): Promise<any> {
    const user = await this.repo.findOne({ phone });
    if (user) {
      throw new HttpException(
        {
          error: 'User',
          message: 'Phone is already exist.',
        },
        HttpStatus.PRECONDITION_FAILED,
      );
    }
    return user;
  }

  async findOneByEmail(email: string): Promise<any> {
    const user = await this.repo.findOne({ email });
    if (!user) {
      throw new HttpException(
        {
          error: 'User',
          message: 'User is not found!.',
        },
        HttpStatus.PRECONDITION_FAILED,
      );
    }
    return user;
  }

  async createOne(payload: UserRegisterDto): Promise<UserEntity> {
    const phone = /^-?\d+$/;
    const email =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (phone.test(payload.emailOrPhone)) {
      payload.phone = payload.emailOrPhone;
      await this.findIsPhoneExist(payload.phone);
    } else if (email.test(payload.emailOrPhone)) {
      payload.email = payload.emailOrPhone;
      await this.findIsExist(payload.email);
    } else if (
      !phone.test(payload.emailOrPhone) &&
      !email.test(payload.emailOrPhone)
    ) {
      throw new HttpException(
        {
          error: 'User',
          message: 'Phone or e-mail is not valid!',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    payload.password = HashUtil.generateHash(payload.password);
    payload.is_admin = 0;
    delete payload.emailOrPhone;
    return this.repo.save(payload);
  }
}
