const db = require("../models");
const Tutorial = db.Sequelize;
const User = db.User;

exports.create = async (req, res) => {
    const test = {
        name: req.body.name,
        age: req.body.age
    }
    const result = await User.create(test);
    // console.log(result)
    res.send(result);
};

exports.findAll = async (req, res) => {
    const result = await User.findAll();
    res.send(result);
};