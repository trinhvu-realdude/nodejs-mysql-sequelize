const db = require("../models");
const User = db.user;
const Tutorial = db.tutorial;
const { Op } = require("sequelize");

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
    console.log(result);
    res.send(result);
};

exports.findAllUserTutorial = async (req, res) => {
    const users = await User.findAll({
        include: [
            {
                model: Tutorial,
            }
        ]
    });

    // const obj = {name : "chuhuumanh"}
    // const test = Object.assign(obj,{age :21})
    // console.log(test);

    res.send(users)

    const result = await users.map(user => {
        return Object.assign(
            {},
            {
                id: user.id,
                name: user.name,
                age: user.age,
                tutorial: user.tutorial.map(tutorial => {
                    return Object.assign(
                        {},
                        {
                            title: tutorial.title,
                            description: tutorial.description,
                            user_id: tutorial.user_id
                        }
                    )
                })
            }
        )
    });

    // console.log(result);

    // res.json(result);
}