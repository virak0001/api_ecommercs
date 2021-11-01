import { TableColumn } from 'typeorm';
import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions';
export default [
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
].map((column) => new TableColumn(column as TableColumnOptions));
