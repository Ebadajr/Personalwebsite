const User = require("../Models/user.js");
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/auth.js");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const donation = require("../Models/donation.js");

const addDonation = async (req, res) => {
  try {
    console.log(req.body);
    const d = donation.create({
      name: req.body.cardHolderName,
      mobile: req.body.mobile,
      amount: req.body.donationAmount,
      shelter: req.body.shelterName,
    });

    res.status(200).send("donation made");
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

const getDonations = async (req, res) => {
  //retrieve all users from the database
  const users = await donation.find({});
  //console.log(users);
  res.status(200).send(users);
};

module.exports = {
  addDonation,
  getDonations,
};
