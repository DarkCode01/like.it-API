const { verifyToken } = require('../middlewares/auth');
const controller = require('../controllers/user.controller');
const schemas = require('../schemas/user.schema');


const routes = [
    {
        method: 'GET',
        url: '/api/users/@:nickname',
        handler: controller.getUserByNickname,
        schema: schemas.getUserByNickname
    },
    {
        method: 'GET',
        url: '/api/users',
        handler: controller.getUsers,
        schema: schemas.getUsers
    },
    {
        method: 'POST',
        url: '/api/users',
        handler: controller.addUser
    },
    {
        method: 'PUT',
        url: '/api/users',
        handler: controller.updateUser,
        onRequest: verifyToken
    },
    {
        method: 'DELETE',
        url: '/api/users',
        handler: controller.desactivateUser,
        onRequest: verifyToken
    }
]

module.exports = routes;