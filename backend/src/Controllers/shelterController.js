
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/auth.js");
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const shelter = require("../Models/shelter.js");



const addShelter = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const Shelter = await shelter.create({
      email: req.body.email,
      password: hashedPassword,
      address: req.body.address,
      name: req.body.name

    });
    
    res.status(200).send("shelter added");
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};



const getShelter = async (req, res) => {
  //retrieve all users from the database
  const users = await pet.find({});
  //console.log(users);
  res.status(200).send(users);
};




module.exports = {
  addShelter,
  getShelter,
 
};
