import { AbstractSoftDeleteEntity } from '@libs/core/common/abstract-soft-delete.entity';
import { Column, Entity } from 'typeorm';
import { Exclude } from 'class-transformer';
import { IsAdmin, Status } from '../user.enum';

@Entity('users')
export class UserEntity extends AbstractSoftDeleteEntity {
  @Column()
  username: string;

  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  avatar?: string;

  @Column({ nullable: true })
  mobile?: string;

  @Column({ nullable: false, enum: IsAdmin, default: IsAdmin.FALSE })
  is_admin: IsAdmin;

  @Column({ type: 'enum', enum: Status, default: Status.INACTIVE })
  status: Status;

  @Column('datetime', { nullable: true })
  last_login_date: Date;

  @Column('datetime', { nullable: true })
  verified_at: Date;
}
