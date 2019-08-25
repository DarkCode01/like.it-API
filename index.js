const mongoose = require('mongoose');
const { fastify } = require('./src/app');
require('dotenv').config();


const start = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, useCreateIndex: true
        });
        await fastify.listen(process.env.PORT);
        fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();
