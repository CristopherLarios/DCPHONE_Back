export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT'), // Permite que Azure asigne el puerto dinámicamente
  app: {
    keys: env.array('APP_KEYS'),
  }
});
