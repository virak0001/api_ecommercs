import { plainToClass } from 'class-transformer';
import * as faker from 'faker';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { HashUtil } from '@libs/core/utils/hash.util';
import { UserEntity } from '../../app/user/entities/user.entity';
import { IsAdmin, Status } from '../../app/user/user.enum';

export class Insert003Admin implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const passwordHash = HashUtil.generateHash('@password@');

    const userAdmin = plainToClass(UserEntity, {
      id: 1,
      email: 'virakcambodia44@gmail.com',
      password: passwordHash,
      username: 'Virak Ran',
      avatar: faker.internet.avatar(),
      status: Status.ACTIVE,
      is_admin: IsAdmin.TRUE,
      phone: '099393709',
      verified_at: new Date(),
    });

    await connection.manager.save([userAdmin]);
  }
}
