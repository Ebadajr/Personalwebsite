const { Router } = require("express");
const bookingController = require("../Controllers/bookingController");

const bookingRoutes = new Router();




bookingRoutes.post("/newBooking", bookingController.addBooking);







module.exports = { bookingRoutes };