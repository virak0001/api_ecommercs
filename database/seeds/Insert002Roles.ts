import { plainToClass } from 'class-transformer';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Role } from '../../app/role/role.entity';

export class Insert002Roles implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const roleNames = ['ADMIN', 'OWNER', 'MEMBER'];
    const roles = roleNames.map((name) => plainToClass(Role, { name }));

    await connection.manager.save(roles);
  }
}
