const jwt = require('jsonwebtoken');

exports.verifyToken = (req, reply, done) => {
    try {
        if (req.raw.url === '/api/users' && req.method !== 'GET'
            || ['POST', 'PUT', 'DELETE'].includes(req.method)) {
            const payload = jwt.verify(
                req.headers.authorization,
                process.env.SECRET
            );

            if (payload) {
                done();
            }
        }

        done();
    } catch(err) {
        reply
            .code(403)
            .send({
                statusCode: 403,
                data: 'Not Authorizaded',
                message: 'Error with token invalid.'
            });
    }
}