export default ({ env }) => ({

    'users-permissions': {
        config: {
            jwtSecret: env('jwtSecret','fy0wjAbfVSSNIVNcI3PjFQ=='),
        },

    },
      'documentation': {
    config: {
      path: '/tmp/documentation', // Cambia la ruta a una con permisos de escritura
    },
  },
});

// export default {
//     'users-permissions': {
//       config: {
//         jwtSecret: process.env.JWT_SECRET || 'tu-secreto-aqui',
//       },
//     },
//   };
