import { TimestampSoftDeleteMigration } from '../common';
export class CreateTablecompanies1651250219677 extends TimestampSoftDeleteMigration {
  public tableName = 'companies';
  public columns = [
    {
      name: 'id',
      type: 'varchar',
      isPrimary: true,
      isGenerated: true,
      generationStrategy: 'uuid',
    },
    {
      name: 'name',
      type: 'varchar',
    },
    {
      name: 'description',
      type: 'varchar',
      isNullable: true,
      isUnique: true,
    },
    {
      name: 'address',
      type: 'varchar',
      isNullable: true,
    },
  ];
}
