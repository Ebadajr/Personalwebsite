const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  Breed: {
    type: String,
  },
  age: {
    type: Number,
  },
  description: {
    type: String,
  },
  type: {
    type: String,
    enum: ["owned", "adoption"],
    required: true,
  },
});

//const patient = mongoose.model("patient", patientSchema);
const pet = mongoose.model("pet", petSchema);
module.exports = pet;
