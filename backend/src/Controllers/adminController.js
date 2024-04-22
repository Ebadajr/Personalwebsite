const User = require("../Models/user.js");
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/auth.js");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const admin = require("../Models/admin.js");

const addAdmin = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const Clinc = await admin.create({
      email: req.body.username,
      password: hashedPassword,
    });

    res.status(200).send("admin added");
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

const getAdmins = async (req, res) => {
  //retrieve all users from the database
  const users = await admin.find({});
  //console.log(users);
  res.status(200).send(users);
};

module.exports = {
  addAdmin,
  getAdmins,
};
