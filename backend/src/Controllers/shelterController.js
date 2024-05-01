const bcrypt = require("bcrypt");
const { createToken } = require("../utils/auth.js");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const shelter = require("../Models/shelter.js");
const shelterRequest = require("../Models/shelterRequest.js");

const addShelter = async (req, res) => {
  id = req.body.id;
  const request = await shelterRequest.findById(id);
  try {
    const Shelter = await shelter.create({
      email: request.email,
      password: request.password,
      address: request.Address,
      mobile: request.mobile,
    });
    request.deleteOne();
    res.status(200).send("shelter added");
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

const addShelterRequest = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const shelter = await shelterRequest.create({
      email: req.body.username,
      password: hashedPassword,
      mobile: req.body.mobile,
      Address: req.body.location,
    });

    res.status(200).send(shelter);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

const getShelter = async (req, res) => {
  //retrieve all users from the database
  const users = await shelter.find({});

  res.status(200).send(users);
};
const getShelterRequests = async (req, res) => {
  //retrieve all users from the database
  const users = await shelterRequest.find({});

  res.status(200).send(users);
};
const rejectshelter = async (req, res) => {
  try {
    id = req.body.id;

    const request = await shelterRequest.findById(id);
    request.deleteOne();
    res.status(200).send("request rejected and deleted");
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

module.exports = {
  addShelter,
  getShelter,
  addShelterRequest,
  getShelterRequests,
  rejectshelter,
};
