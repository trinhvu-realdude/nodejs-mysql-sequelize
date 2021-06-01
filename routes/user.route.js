module.exports = app => {
    const users = require("../controllers/user.controller");
    const router = require("express").Router();

    router.post('/', users.create);

    router.get('/', users.findAll);

    router.get('/users-tutorials', users.findAllUserTutorial);

    app.use('/api/users', router);
}