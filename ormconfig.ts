module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  charset: 'utf8mb4',
  supportBigNumbers: true,
  bigNumberStrings: false,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['database/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'database/migrations',
  },
};
