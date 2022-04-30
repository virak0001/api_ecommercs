import { define } from 'typeorm-seeding';
import { Status } from '../../app/user/user.enum';
import { UserEntity } from '../../app/user/entities/user.entity';
define(UserEntity, (faker, settings: { passwordHash: string }) => {
  const { passwordHash } = settings;
  const user = new UserEntity();
  const name = faker.name.findName();
  user.email = faker.internet.email(name);
  user.password = passwordHash;
  user.username = name;
  user.avatar = faker.internet.avatar();
  user.status = Status.ACTIVE;
  user.employee_id = null;
  return user;
});
