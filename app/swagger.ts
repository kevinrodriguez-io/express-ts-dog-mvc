export default {
  swagger: '2.0',
  info: {
    version: '1.0.0'
  },
  host: 'localhost:3000',
  schemes: ['http'],
  produces: ['application/json'],
  paths: {
    '/dogs': {
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
    '/dogs/:dogName': {
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
