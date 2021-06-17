const {
    createUser,
    findAllUser,
    findAllUserTutorial,
    findAllUserContactInfo
} = require("../services/user.service");

exports.create = async (req, res) => {
    const {name, age} = req.body;
    const user = {
        name: name,
        age: age
    }
    const result = await createUser(user);
    res.send(result);
};

exports.findAll = async (req, res) => {
    const result = await findAllUser();
    console.log(result);
    res.send(result);
};

exports.findAllUserTutorial = async (req, res) => {
    const users = await findAllUserTutorial();

    // const obj = {name : "chuhuumanh"}
    // const test = Object.assign(obj,{age :21})
    // console.log(test);

    res.send(users)

    // const result = await users.map(user => {
    //     return Object.assign(
    //         {},
    //         {
    //             id: user.id,
    //             name: user.name,
    //             age: user.age,
    //             tutorial: user.tutorial.map(tutorial => {
    //                 return Object.assign(
    //                     {},
    //                     {
    //                         id: tutorial.id,
    //                         title: tutorial.title,
    //                         description: tutorial.description,
    //                         user_id: tutorial.user_id
    //                     }
    //                 )
    //             })
    //         }
    //     )
    // });
    // console.log(result);

    // res.json(result);
};

exports.findAllUserContactInfo = async (req, res) => {
    const result = await findAllUserContactInfo();
    res.send(result);
};