module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '35.234.149.190'),
      // socketPath: `/cloudsql/${env('DATABASE_HOST')}`,
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'dcphonedb'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'HolaMundo17X..'),
      ssl: env.bool('DATABASE_SSL', false) && {
        key: env('DATABASE_SSL_KEY', undefined),
        cert: env('DATABASE_SSL_CERT', undefined),
        ca: env('DATABASE_SSL_CA', undefined),
        capath: env('DATABASE_SSL_CAPATH', undefined),
        cipher: env('DATABASE_SSL_CIPHER', undefined),
        rejectUnauthorized: env.bool(
          'DATABASE_SSL_REJECT_UNAUTHORIZED',
          true
        ),
      },
    },
    acquireConnectionTimeout: 1000000,
    pool: {
      min: 2, // Número mínimo de conexiones
      max: 10, // Aumenta el límite de conexiones
      acquireTimeoutMillis: 400000, // Aumenta el tiempo de espera
      createTimeoutMillis: 400000,
      destroyTimeoutMillis: 400000,
      idleTimeoutMillis: 30000,
      createRetryIntervalMillis: 20000,
      reapIntervalMillis:1000,
      
    },
    debug: false,
  },
});