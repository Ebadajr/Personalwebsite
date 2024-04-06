const Booking = require("../Models/booking.js");
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/auth.js");
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const booking = require("../Models/booking.js");

const addBooking = async (req, res) => {
    var service;
    
  try {
    switch(req.body.service){
        case '1':
        service = 'Feeding';
      break;
    case '2':
        service = 'Clinic';
      break;
    case '3':
        service = 'Grooming';
      break;
    case '4':
        service = 'Train';
     break;
    default:
      
      break;
      }
console.log(service);
      const book = await booking.create({
        name: req.body.name,
        email: req.body.email,
        date: req.body.date,
        time : req.body.time,
        type : service
      });

      console.log(book);
    res.status(200).send("booking made");
  } catch (e) {
    
    res.status(400).send(e);
  }
};
const homeBooking = async (req, res) => {
  var service;
  
try {
  switch(req.body.service){
      case '1':
      service = 'Adoption';
    break;
  case '2':
      service = 'Clinic';
    break;
 
  default:
    
    break;
    }
console.log(service);
    const book = await booking.create({
      name: req.body.name,
      email: req.body.email,
      date: req.body.date,
      time : req.body.time,
      type : service
    });

    console.log(book);
  res.status(200).send("booking made");
} catch (e) {
  
  res.status(400).send(e);
}
};
const listBookings = async (req, res) => {
    try {
      res.send(await booking.find());
    } catch (e) {
      res.status(400).send(e);
    }
  };



module.exports = {
  addBooking,
 listBookings,
 homeBooking
};
