const User = require("../Models/user.js");
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/auth.js");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const blog = require("../Models/blogs.js");

const addBlog = async (req, res) => {
  const token = req.cookies.jwt;
  var id;
  jwt.verify(token, "supersecret", (err, decodedToken) => {
    if (err) {
      // console.log('You are not logged in.');
      // res send status 401 you are not logged in
      res.status(401).json({ message: "You are not logged in." });
      // res.redirect('/login');
    } else {
      id = decodedToken.name;
    }
  });
  const p = await User.findById(id);
  const b = blog.create({
    username: p.email,
    title: req.body.title,
    content: req.body.content,
  });
  console.log(b);
  res.status(200).send("blog added");
};

const getBlogs = async (req, res) => {
  //retrieve all users from the database
  const users = await blog.find({});
  //console.log(users);
  res.status(200).send(users);
};

module.exports = {
  addBlog,
  getBlogs,
};
