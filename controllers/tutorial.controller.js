const { query } = require("express");
const {
    createTutorial,
    findAllTutorial,
    findTutorialId
} = require("../services/tutorial.service");

// Create
exports.create = async (req, res) => {
    const {title, description, user_id} = req.body;
    const tutorial = {
        title: title,
        description: description,
        // published: published ? published : false
        user_id: user_id,
    };
    const result = await createTutorial(tutorial);
    console.log(result);
    res.send(result);
};

// Retrieve all 
exports.findAll = async (req, res) => {
    const result = await findAllTutorial();
    res.send(result);
};

// Retrieve one with id
exports.findOne = async (req, res) => {
    const id = req.params.id;
    const result = await findTutorialId(id);
    res.send(result);
};

// Update
exports.update = async (req, res) => {

    const id = req.params.id;

    const num = await Tutorial.update(req.body, { where: { id: id }});

    if (num == 1) {
        res.send({
            message: "Update successfully!"
        });
    }
    else {
        res.send({
            message: `Cannot update Tutorial with id=${id}`
        });
    }
};

// Delete one with id
exports.delete = async (req, res) => {
    const id = req.params.id;

    const num = await Tutorial.destroy({ where: { id: id }});

    if (num == 1) {
        res.send({
            message: "Delete successfully"
        });
    }
    else {
        res.send({
            message: `Cannot delete Tutorial with id=${id}`
        });
    }
};

// Delete all
exports.deleteAll = async (req, res) => {
    await Tutorial.destroy({ where: {}, truncate: true });
    res.send({
        message: "Empty set"
    });
};

// Retrieve all published
exports.findAllPublished = async (req, res) => {
    const result = await Tutorial.findAll({
        where: {
            published: true
        }
    });
    res.send(result);
};

// Retrieve all published using query 
exports.findAllPublishedQuery = async (req, res) => {
    const {published} = req.query;

    const result = await Tutorial.findAll({
        where: {
            published: published == 'true' ? true : false
        }
    });

    res.send(result);
}