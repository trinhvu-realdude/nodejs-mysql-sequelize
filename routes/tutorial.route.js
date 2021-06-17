module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller");

    const router = require("express").Router();

    // Create
    router.post('/tutorials', tutorials.create);

    // Retrieve all 
    router.get('/tutorials', tutorials.findAll);

    // Retrieve all published using query
    router.get('/tutorials', tutorials.findAllPublishedQuery);

    // Read all published
    router.get('/tutorials/published', tutorials.findAllPublished);

    // Read one with id
    router.get('/tutorials/:id', tutorials.findOne);

    // Update with id
    router.put('/tutorials/:id', tutorials.update);

    // Delete with id
    router.delete('/tutorials/:id', tutorials.delete);

    // Delete all
    router.delete('/tutorials', tutorials.deleteAll);

    app.use('/api', router);
};