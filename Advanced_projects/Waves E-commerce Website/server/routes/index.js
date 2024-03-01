const express = require('express');
const authRoute = require('./auth.route');
const router = express.Router();
const usersRoute = require('./user.route');

const routesIndex = [
    {
        path: '/auth',
        route: authRoute
    },
    {
        path: '/users',
        route: usersRoute
    }
]

routesIndex.forEach((route) => {
    router.use(route.path, route.route);
});



module.exports = router;