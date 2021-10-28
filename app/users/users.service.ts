import { Injectable } from '@nestjs/common';
// export type User = any;
@Injectable()
export class UsersService {
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
}
