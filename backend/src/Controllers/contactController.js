const contact = require("../Models/contact.js");

const addContact = async (req, res) => {
  try {
    const loza = await contact.create({
      name: req.body.name,
      subject: req.body.subject,
      email: req.body.email,
      message: req.body.message,
    });
    console.log(loza);
    res.status(200).send("Your message was sent!");
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

const getContacts = async (req, res) => {
  //retrieve all users from the database
  const users = await contact.find({});
  //console.log(users);
  res.status(200).send(users);
};

module.exports = {
  addContact,
  getContacts,
};
