const { Router } = require("express");
const shelterController = require("../Controllers/shelterController");

const shelterRoutes = new Router();

shelterRoutes.post("/addShelter", shelterController.addShelter);

shelterRoutes.get("/listShelters", shelterController.getShelter);

//userRoutes.post('/forgetPassword', userController.forgetPassword)

module.exports = { shelterRoutes };
