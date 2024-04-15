const { Router } = require("express");
const userController = require("../Controllers/userController");

const userRoutes = new Router();

userRoutes.post("/admin", userController.addUser);

userRoutes.get("/", userController.listUsers);

userRoutes.delete("/:id", userController.deleteUser);

//userRoutes.post('/forgetPassword', userController.forgetPassword)

userRoutes.get("/getName", userController.getUser);

module.exports = { userRoutes };
