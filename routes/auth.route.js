const controller = require('../controllers/auth.controller');

const routes = [
    {
        method: 'POST',
        url: '/api/token/access',
        handler: controller.getToken
    }
]

module.exports = routes;