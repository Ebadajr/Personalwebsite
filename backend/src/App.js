const express = require("express");
const bodyParser = require('body-parser');
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
const bookingController = require("./Controllers/bookingController");

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
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/login", userController.login);
app.post("/add",userController.addUser );
app.use(auth);


const server = app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

app.get("/users", userController.getUsers);
app.post("/newBooking", bookingController.addBooking);

app.use("/logout", userController.logout);

  





