const db = require("../models");
const ContactInfo = db.contact_info;

// Create
exports.create = async (req, res) => {
    const {user_id, city, phone} = req.body;
    const contact = {
        user_id: user_id,
        city: city,
        phone: phone
    };
    const result = await ContactInfo.create(contact);
    console.log(result);
    res.send(result);
};

// Retrieve all 
exports.findAll = async (req, res) => {
    const result = await ContactInfo.findAll();
    res.send(result);
};