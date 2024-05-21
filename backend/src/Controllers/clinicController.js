const bcrypt = require("bcrypt");
const { createToken } = require("../utils/auth.js");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const clinic = require("../Models/clinic.js");
const clinicRequest = require("../Models/clinicRequest.js");

const addClinic = async (req, res) => {
  try {
    id = req.body.id;

    const request = await clinicRequest.findById(id);
    console.log(request);
    const Clinc = await clinic.create({
      email: request.email,
      password: request.password,
      mobile: request.mobile,
      Address: request.Address,
      description: request.description,
    });
    request.deleteOne();
    res.status(200).send(Clinc);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};
const addClinicRequest = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const Clinc = await clinicRequest.create({
      email: req.body.username,
      password: hashedPassword,
      mobile: req.body.mobile,
      Address: req.body.location,
      description: req.body.description,
    });

    res.status(200).send(Clinc);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

const getClinics = async (req, res) => {
  const users = await clinic.find({});
  res.status(200).send(users);
};
const getClinicRequests = async (req, res) => {
  //retrieve all users from the database
  const users = await clinicRequest.find({});

  res.status(200).send(users);
};
const rejectclinic = async (req, res) => {
  try {
    id = req.body.id;

    const request = await clinicRequest.findById(id);
    request.deleteOne();
    res.status(200).send("request rejected and deleted");
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

module.exports = {
  addClinic,
  getClinics,
  addClinicRequest,
  getClinicRequests,
  rejectclinic,
};
