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

  async findIsPhoneExist(phone: number): Promise<any> {
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
    if (payload?.email) {
      await this.findIsExist(payload.email);
    }
    if (payload?.phone) {
      await this.findIsPhoneExist(payload.phone);
    }
    payload.password = HashUtil.generateHash(payload.password);
    payload.is_admin = 0;
    return this.repo.save(payload);
  }
}
