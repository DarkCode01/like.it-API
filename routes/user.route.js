const controller = require('../controllers/user.controller');

const routes = [
    {
        method: 'GET',
        url: '/api/users/@:nickname',
        handler: controller.getUserByNickname
    },
    {
        method: 'GET',
        url: '/api/users',
        handler: controller.getUsers
    },
    {
        method: 'POST',
        url: '/api/users',
        handler: controller.addUser
    },
    {
        method: 'PUT',
        url: '/api/users',
        handler: controller.updateUser
    },
    {
        method: 'DELETE',
        url: '/api/users',
        handler: controller.desactivateUser
    }
]

module.exports = routes;