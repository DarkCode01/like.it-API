const controller = require('../controllers/auth.controller');
const schemes = require('../schemas/auth.schema');

const routes = [
    {
        method: 'POST',
        url: '/api/token/access',
        handler: controller.getToken,
        schema: schemes.getToken
    }
]

module.exports = routes;