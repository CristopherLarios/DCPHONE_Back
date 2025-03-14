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
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USER'),
      password: env('DATABASE_PASSWORD'),
      ssl: { rejectUnauthorized: false }, 
    }
  },
});
