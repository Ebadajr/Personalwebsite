const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userModel = require("./user.js");

const clinicSchema = new Schema({
  Address: {
    type: String,
  },
  description: {
    type: String,
  },
});

//const patient = mongoose.model("patient", patientSchema);
const clinic = userModel.discriminator("clinic", clinicSchema);
module.exports = clinic;
