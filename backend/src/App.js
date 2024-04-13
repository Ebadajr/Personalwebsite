const express = require("express");

const mongoose = require("mongoose");
//mongoose.set('strictQuery', false);
const cors = require("cors");

const cookieParser = require("cookie-parser");
require("dotenv").config();
const { auth} = require("./utils/auth");
require("dotenv").config();

const MongoURI =
"mongodb+srv://ebadajr:Y3YWONbfYohScAWw@aleefy.ez8t7x3.mongodb.net/";
//App variables
const app = express();
const userController = require("./Controllers/userController");
const petController = require("./Controllers/petController");
const bookingController = require("./Controllers/bookingController");
const shelterController = require("./Controllers/shelterController");
const clinicController = require("./Controllers/clinicController");
const rescueController = require("./Controllers/rescueController");
const port = process.env.PORT || "7000";
const http = require("http");
const { Server } = require("socket.io");


mongoose
  .connect(MongoURI)
  .then(() => {
    console.log("MongoDB is now connected!");
  })
  .catch((err) => console.log(err));

app.get("/home", (req, res) => {
  console.log("You have everything installed!");
  res.status(200).send("You have everything installed!");
});

// #Routing to userController here
app.use(
  cors({
    origin: ['http://localhost:4000', 'http://localhost:3000'], // Replace with the actual origin of your React app
    credentials: true,
  })
);



app.use(express.json());
//app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.post("/newForm", rescueController.addRescue);
app.post("/addClinic", clinicController.addClinic);
app.get("/listBookings", bookingController.listBookings);
app.get("/listForms", rescueController.listForms);
app.post("/addPet", petController.addPet);
app.use("/login", userController.login);
app.post("/add",userController.addUser );
app.post("/addShelter", shelterController.addShelter);
app.get("/myPet",userController.myPets );
app.get("allpets",petController.getPets);
app.use(auth);


const server = app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

app.post("/homeBooking", bookingController.homeBooking);
app.get("/users", userController.getUsers);
app.post("/newBooking", bookingController.addBooking);
app.get("/getName", userController.getUser);
app.get("/getMobile", userController.getMobile);
app.post("/newPet",userController.addPet );
app.post("/updateUser",userController.updateUser);
app.use("/logout", userController.logout);

  





