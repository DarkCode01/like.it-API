const jwt = require('jsonwebtoken');

exports.verifyToken = (req, reply, done) => {
    try {
        const payload = jwt.verify(
            req.headers.authorization.split(' ')[1],
            process.env.SECRET
        );

        if (payload) {
            req.user = payload;
            done();
        }
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