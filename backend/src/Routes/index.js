const Router = require("express");
const userController = require("../Controllers/userController");
const router = new Router();
const { userRoutes } = require("./user.routes");


router.use("/user", userRoutes);

router.get("/logout", userController.logout);


module.exports = { router };