const fastify = require('fastify')({
    logger: true
});
const { verifyToken } = require('../middlewares/auth');
const routes = require('../routes');

fastify.register(require('fastify-cors'));

fastify.addHook('onRequest', verifyToken);

routes.forEach((route, index) => {
    fastify.route(route);
});

module.exports = { fastify };