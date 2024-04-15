const User = require("../Models/user.js");
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/auth.js");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const pet = require("../Models/pet.js");

const addPet = async (req, res) => {
  try {
    const loza = await pet.create({
      name: req.body.name,
      breed: req.body.breed,
    });
    console.log(loza);
    res.status(200).send("pet added");
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

const getPets = async (req, res) => {
  //retrieve all users from the database
  const users = await pet.find({});
  //console.log(users);
  res.status(200).send(users);
};

module.exports = {
  addPet,
  getPets,
};
