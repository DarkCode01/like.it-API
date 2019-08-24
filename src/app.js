const fastify = require('fastify')({
    logger: true
});

fastify.register(require('fastify-cors'));


module.exports = { fastify };
