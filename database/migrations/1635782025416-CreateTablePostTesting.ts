import { MigrationInterface, QueryRunner } from 'typeorm';
import { TimestampSoftDeleteMigration } from '../common';

export class CreateTablePostTesting1635782025416 extends TimestampSoftDeleteMigration {
  public tableName = 'branches';
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
      name: 'address',
      type: 'varchar',
      isNullable: true,
    },
    {
      name: 'contact',
      type: 'varchar',
      isNullable: true,
    },
    {
      name: 'note',
      type: 'varchar',
      isNullable: true,
    },
    {
      name: 'company_id',
      type: 'int',
    },
  ];
}
