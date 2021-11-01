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
    {
        name: 'deleted_at',
        type: 'datetime',
        isNullable: true,
    },
];
