// module.exports = ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       host: env('DATABASE_HOST', 'localhost'),
//       port: env.int('DATABASE_PORT', 3306),
//       database: env('DATABASE_NAME', 'strapi_dcphone'),
//       user: env('DATABASE_USER', 'root'),
//       password: env('DATABASE_PASSWORD', 'HolaMundo17X..'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//     debug: false,
//   },
// });

module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'), 
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['your-secret-key']),
  },
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'mysql-db-strapi.mysql.database.azure.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi_dcphone'),
      user: env('DATABASE_USER', 'Larios_root'),
      password: env('DATABASE_PASSWORD', 'HolaMundo17X..'),
      ssl: { rejectUnauthorized: false }, 
    },
    debug: false,
  },
});
