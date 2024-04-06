
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/auth.js");
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const clinic = require("../Models/clinic.js");



const addClinic = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const Clinc = await clinic.create({
      email: req.body.email,
      password: hashedPassword,
      Address: req.body.address,

    });
    
    res.status(200).send("clinic added");
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};



const getClinics = async (req, res) => {
  //retrieve all users from the database
  const users = await clinic.find({});
  //console.log(users);
  res.status(200).send(users);
};




module.exports = {
  addClinic,
  getClinics,
 
};
