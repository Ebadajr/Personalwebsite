const { Router } = require("express");
const bookingController = require("../Controllers/bookingController");

const bookingRoutes = new Router();


bookingRoutes.get("/listBookings", bookingController.listBookings);

bookingRoutes.post("/newBooking", bookingController.addBooking);

bookingRoutes.post("/homeBooking", bookingController.homeBooking);






module.exports = { bookingRoutes };