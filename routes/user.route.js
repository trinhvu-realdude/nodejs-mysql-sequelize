module.exports = app => {
    const users = require("../controllers/user.controller");
    const router = require("express").Router();

    router.post('/', users.create);

    router.get('/', users.findAll);

    router.get('/tutorial', users.findAllUserTutorial);

    router.get('/contact-info', users.findAllUserContactInfo);

    app.use('/api/users', router);
}