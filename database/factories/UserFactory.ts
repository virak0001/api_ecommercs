import { define } from 'typeorm-seeding';
import { Status } from '../../app/users/user.enum';
import { UserEntity } from '../../app/users/entities/user.entity';
define(UserEntity, (faker, settings: { passwordHash: string }) => {
  const { passwordHash } = settings;
  const user = new UserEntity();
  const name = faker.name.findName();
  user.email = faker.internet.email(name);
  user.password = passwordHash;
  user.username = name;
  user.is_admin = 1;
  user.avatar = faker.internet.avatar();
  user.status = Status.ACTIVE;
  return user;
});
