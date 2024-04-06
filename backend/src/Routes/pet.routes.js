const { Router } = require("express");
const petController = require("../Controllers/petController");

const userRoutes = new Router();




userRoutes.post("/addPet", petController.addPet);

userRoutes.get("/", petController.addPet);



//userRoutes.post('/forgetPassword', userController.forgetPassword)





module.exports = { petRoutes };