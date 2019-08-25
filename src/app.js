const fastify = require('fastify')({
    logger: true
});
const routes = require('../routes');


fastify.register(require('fastify-cors'));

routes.forEach((route, index) => {
    fastify.route(route);
});


module.exports = { fastify };
