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
  const users = await pet.find({ type: "adoption" });
  //console.log(users);
  res.status(200).send(users);
};
const getAllPets = async (req, res) => {
  //retrieve all users from the database
  const users = await pet.find({ type: "owned" });
  //console.log(users);
  res.status(200).send(users);
};
const addNote = async (req, res) => {
  const token = req.cookies.jwt;
  var id;
  jwt.verify(token, "supersecret", (err, decodedToken) => {
    if (err) {
      // console.log('You are not logged in.');
      // res send status 401 you are not logged in
      res.status(401).json({ message: "You are not logged in." });
      // res.redirect('/login');
    } else {
      id = decodedToken.name;
    }
  });

  const pp = await pet.findById(req.body.id);
  console.log(pp);
  console.log(req.body);
  pp.notes = req.body.note;

  await pp.save();
  res.status(200).json("done");
};

module.exports = {
  addPet,
  getPets,
  getAllPets,
  addNote,
};
