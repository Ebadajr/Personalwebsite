const Router = require("express");
const userController = require("../Controllers/userController");
const router = new Router();
const { userRoutes } = require("./user.routes");
const { bookingRoutes } = require("./bookings.routes");


router.use("/user", userRoutes);
router.use("/booking", bookingRoutes);

router.get("/logout", userController.logout);



module.exports = { router };