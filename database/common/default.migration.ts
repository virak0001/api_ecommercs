import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableColumn,
    TableForeignKey,
    TableIndex,
} from 'typeorm';
import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions';

export class DefaultMigration implements MigrationInterface {
    public tableName = '';
    public columns = [];
    public defaultColumns = [];
    public foreignKeys = [];
    public indexes = [];

    public async up(queryRunner: QueryRunner): Promise<any> {
        const tableColumns = [...this.columns, ...this.defaultColumns].map(
            (column) => new TableColumn(column as TableColumnOptions),
        );
        const table = new Table({
            name: this.tableName,
            columns: tableColumns,
        });
        await queryRunner.createTable(table);

        if (this.foreignKeys.length) {
            for (const fk of this.foreignKeys) {
                const {
                    columnNames,
                    referencedColumnNames,
                    referencedTableName,
                } = fk;
                await queryRunner.createForeignKey(
                    this.tableName,
                    new TableForeignKey({
                        columnNames,
                        referencedColumnNames,
                        referencedTableName,
                    }),
                );
            }
        }
        if (this.indexes.length) {
            for (const idx of this.indexes) {
                const { name, columnNames } = idx;
                await queryRunner.createIndex(
                    this.tableName,
                    new TableIndex({
                        name,
                        columnNames,
                    }),
                );
            }
        }
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(this.tableName);
    }
}
