const User = require("../Models/user.js");
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/auth.js");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const pet = require("../Models/pet.js");
const adoption = require("../Models/adoptionRequest.js");

const addPet = async (req, res) => {
  try {
    const loza = await pet.create({
      name: req.body.name,
      Breed: req.body.breed,
      age: req.body.age,
      description: req.body.description,
      type: "adoption",
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
  console.log("hi");
  const users = await pet.find({ type: "adoption" });
  //console.log(users);
  res.status(200).send(users);
};

module.exports = {
  addPet,
  getPets,
};
