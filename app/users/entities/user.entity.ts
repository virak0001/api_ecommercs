import { AbstractSoftDeleteEntity } from '../../../libs/core/src/common/abstract-soft-delete.entity';
import { Column, Entity } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Status } from '../user.enum';

@Entity('users')
export class UserEntity extends AbstractSoftDeleteEntity {
  @Column()
  username: string;

  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column({ nullable: true })
  address: string;

  @Column({ unique: true })
  email: string;

  @Column({ type: 'enum', enum: Status })
  status: Status;

  @Column('datetime', { nullable: true })
  last_login_date: Date;
}
