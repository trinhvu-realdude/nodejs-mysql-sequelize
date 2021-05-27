module.exports = app => {
    const  tutorials = require("../controllers/tutorial.controller");

    const router = require("express").Router();

    // Create
    router.post('/', tutorials.create);

    // Read all published
    router.get('/published', tutorials.findAllPublished);

    // Read one with id
    router.get('/:id', tutorials.findOne);

    // Update with id
    router.put('/:id', tutorials.update);

    // Delete with id
    router.delete('/:id', tutorials.delete);

    // Delete all
    router.delete('/', tutorials.deleteAll);

    // Retrieve all 
    router.get('/', tutorials.findAll);

    app.use('/api/tutorials', router);
};