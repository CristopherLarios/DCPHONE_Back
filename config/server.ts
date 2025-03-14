export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', process.env.PORT || 1337), // Permite que Azure asigne el puerto dinámicamente
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('PUBLIC_URL', `https://${process.env.WEBSITE_HOSTNAME}`), // Usa la URL de Azure dinámicamente
  proxy: true, 
});
