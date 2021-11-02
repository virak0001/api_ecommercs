import { DefaultMigration } from '../common';

export class CreateTableRoles1635832293435 extends DefaultMigration {
  public tableName = 'roles';
  public columns = [
    {
      name: 'id',
      type: 'int',
      isPrimary: true,
      isGenerated: true,
      generationStrategy: 'increment',
    },
    {
      name: 'name',
      type: 'varchar',
    },
    {
      name: 'created_at',
      type: 'datetime',
      isNullable: true,
      default: 'CURRENT_TIMESTAMP',
    },
    {
      name: 'updated_at',
      type: 'datetime',
      isNullable: true,
      default: 'CURRENT_TIMESTAMP',
    },
  ];
}
