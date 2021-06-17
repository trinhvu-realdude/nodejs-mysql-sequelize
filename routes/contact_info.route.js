module.exports = app => {
    const contacts = require("../controllers/contact_info.controller");
    const router = require("express").Router();

    router.post('/', contacts.create);

    router.get('/', contacts.findAll);

    app.use('/api/contact-info', router);
}