const db = require("../models");
const Tutorial = db.Sequelize;
const User = db.Sequelize;

exports.create = (req, res) => {
    const user = {
        name: req.body.name,
        age: req.body.age
    }
};

exports.findAll = async (req, res) => {
    const result = await User.findAll();
    res.send(result);
};