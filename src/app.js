const fastify = require('fastify')({
    logger: {
        level: 'trace'
    }
});
const { verifyToken } = require('../middlewares/auth');
const swaggerConfig = require('../config/swagger.config');
const { User, Post } = require('../config/schemas.config');
const routes = require('../routes');

/**Add configuration with documentation and CORS. */
fastify.register(require('fastify-cors'));
fastify.register(require('fastify-swagger'), swaggerConfig);

// /**Add middleware of Bearer Token. */
// fastify.addHook('onRequest', verifyToken);

/**Add schemas of user and post request. */
fastify.addSchema(User)
fastify.addSchema(Post);

/**Add all routes with all controllers */
routes.forEach((route, index) => {
    fastify.route(route);
});

module.exports = { fastify };