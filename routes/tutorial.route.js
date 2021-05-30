module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller");

    const router = require("express").Router();

    // Create
    router.post('/', tutorials.create);

    // Retrieve all 
    router.get('/', tutorials.findAll);

    // // Retrieve all published using query
    // router.get('/', tutorials.findAllPublishedQuery);

    // // Read all published
    // router.get('/published', tutorials.findAllPublished);

    // // Read one with id
    // router.get('/:id', tutorials.findOne);

    // // Update with id
    // router.put('/:id', tutorials.update);

    // // Delete with id
    // router.delete('/:id', tutorials.delete);

    // // Delete all
    // router.delete('/', tutorials.deleteAll);

    app.use('/api/tutorials', router);
};