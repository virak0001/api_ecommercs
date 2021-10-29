import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserRegisterDto } from './dto/user-register.dto';
import { UserEntity } from "./entities/user.entity";
// export type User = any;
@Injectable()
export class UsersService {
  constructor(private readonly _repo: UserRepository) {}
  private readonly users = [
    {
      userId: 1,
      email: 'virakcambodia44@gmail.com',
      password: 'changeme',
      status: 'ACTIVE',
    },
    {
      userId: 2,
      email: 'maria',
      password: 'guess',
      status: 'INACTIVE',
    },
  ];

  async findOne(email: string): Promise<any> {
    return this.users.find((user) => user.email === email);
  }

  async createOne(payload: UserRegisterDto): Promise<any> {
    return this._repo.save(payload);
  }
}
