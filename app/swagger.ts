export default {
  swagger: '2.0',
  info: {
    version: '1.0.0'
  },
  host: 'localhost:3000',
  basePath: '/api/v1',
  schemes: ['http'],
  produces: ['application/json'],
  paths: {
    '/dog': {
      get: {
        tags: ['dog'],
        summary: 'Returns all the dogs in the database',
        responses: {
          '200': {
            description: 'OK'
          }
        },
        content: {
          'application/json': {}
        }
      }
    },
    '/dog/:dogName': {
      get: {
        tags: ['dog'],
        summary: 'Finds a dog with the given dog name',
        responses: {
          '200': {
            description: 'OK'
          }
        },
        content: {
          'application/json': {}
        }
      }
    }
  }
};
