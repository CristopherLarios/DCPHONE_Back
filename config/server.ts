export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT',80),
  app: {
    keys: env.array('ADMIN_JWT_SECRET','1NJSycfSLFvvWPGUTebsdg=='),
  }
});
