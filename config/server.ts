export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('PUBLIC_URL', 'dcphone-back-bbhnhxf4h5c2bvfe.eastus2-01.azurewebsites.net'), 
  proxy: true, 
});
