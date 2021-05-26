const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Create
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    Tutorial.create(tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

// Retrieve all
exports.findAll = async (req, res) => {
    const result = await Tutorial.findAll();
    res.send(result);
};

// Retrieve one with id
exports.findOne = async (req, res) => {
    const id = req.params.id;
    const result = await Tutorial.findByPk(id);
    res.send(result);
};

// Update
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    
};

// Delete one with id
exports.delete = (req, res) => {

};

// Delete all
exports.deleteAll = (req, res) => {

};

// Retrieve all published
exports.findAllPublished = (req, res) => {

};