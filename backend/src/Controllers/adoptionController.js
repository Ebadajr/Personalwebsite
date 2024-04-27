const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const adoption = require("../Models/adoptionRequest.js");
const user = require("../Models/user.js");
const pet = require("../Models/pet.js");
const addAdoption = async (req, res) => {
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
  const p = await user.findById(id);
  const adopted = await pet.findById(req.body.id);

  const loza = await adoption.create({
    email: p.email,
    Breed: adopted.Breed,
    PetName: adopted.name,
  });
  console.log(loza);
  adopted.deleteOne();
  res.status(200).send("Adoption request sent");
};

const getAdoptions = async (req, res) => {
  //retrieve all users from the database

  const users = await adoption.find();
  //console.log(users);
  res.status(200).send(users);
};

module.exports = {
  addAdoption,
  getAdoptions,
};
