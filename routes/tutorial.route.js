module.exports = app => {
    const  tutorials = require("../controllers/tutorial.controller");

    const router = require("express").Router();

    // Create
    router.post('/', tutorials.create);

    // Read all
    router.get('/', tutorials.findAll);

    // Read one with id
    router.get('/:id', tutorials.findOne);
    
    app.use('/api/tutorials', router);
};