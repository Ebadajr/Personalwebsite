const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userModel = require("./user.js");

const adminSchema = new Schema({
  name: {
    type: String,
  },
});

//const patient = mongoose.model("patient", patientSchema);
const admin = userModel.discriminator("admin", adminSchema);
module.exports = admin;
