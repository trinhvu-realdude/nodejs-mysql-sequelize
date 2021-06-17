const db = require("../models");
const User = db.user;
const Tutorial = db.tutorial;
const ContactInfo = db.contact_info;

const createUser = (user) => User.create(user);

const findAllUser = () => User.findAll();

const findAllUserTutorial = () => User.findAll({
    include: [
        {
            model: Tutorial
        }
    ]
});

const findAllUserContactInfo = () => User.findAll({
    include: [
        {
            model: ContactInfo
        }
    ]
});

module.exports = {
    createUser,
    findAllUser,
    findAllUserTutorial,
    findAllUserContactInfo
}