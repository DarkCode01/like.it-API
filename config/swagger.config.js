module.exports = {
    routePrefix: '/api/documentation',
    exposeRoute: true,
    swagger: {
        info: {
          title: 'Like.it [API REST]',
          description: 'Documentation of Like.it api to provided all data of users.',
          version: '0.1.0'
        },
        externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here'
        },
        host: process.env.HOST || 'localhost',
        schemes: [ 'http' ],
        consumes: [ 'application/json' ],
        produces: [ 'application/json' ],
        tags: [
          {
            name: 'Token Authorization',
            description: 'Endpoint to get access token.'
          },
          {
            name: 'Users Accounts',
            description: 'Endpoints to provided data of all users accounts.'
          }
        ]
      }
}