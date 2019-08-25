const authRoutes = require('./auth.route');
const userRoutes = require('./user.route');


module.exports = Array.prototype.concat(
    authRoutes,
    userRoutes
);