const { query } = require("express");
const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Create
exports.create = async (req, res) => {
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

    const result = await Tutorial.create(tutorial);
    res.send(result);
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