import { TimestampSoftDeleteMigration } from '../common';
import { Status } from '../../app/user/user.enum';

export class CreateTableUsers1635823697936 extends TimestampSoftDeleteMigration {
  public tableName = 'users';
  public columns = [
    {
      name: 'id',
      type: 'varchar',
      isPrimary: true,
      isGenerated: true,
      generationStrategy: 'uuid',
    },
    {
      name: 'username',
      type: 'varchar',
    },
    {
      name: 'email',
      type: 'varchar',
      isUnique: true,
    },
    {
      name: 'password',
      type: 'varchar',
    },
    {
      name: 'mobile',
      type: 'varchar',
      isNullable: true,
    },
    {
      name: 'avatar',
      type: 'varchar',
      isNullable: true,
    },
    {
      name: 'is_admin',
      type: 'varchar',
    },
    {
      name: 'status',
      type: 'enum',
      enum: Object.values(Status),
    },
    {
      name: 'last_login_date',
      type: 'datetime',
      isNullable: true,
    },
    {
      name: 'verified_at',
      type: 'datetime',
      isNullable: true,
    },
  ];
}
