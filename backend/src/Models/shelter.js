const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shelterModel = require("./user.js");

const shelterSchema = new Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
});

//const patient = mongoose.model("patient", patientSchema);
const shelter = shelterModel.discriminator("shelter", shelterSchema);
module.exports = shelter;
