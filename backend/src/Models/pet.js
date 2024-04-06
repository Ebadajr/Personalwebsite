const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userModel = require('./user.js')


const petSchema = new Schema({
  
  name: {
    type: String,
    required: true
  },
  Breed:{
    type:String,
  }
  

});

//const patient = mongoose.model("patient", patientSchema);
const pet=  mongoose.model("pet", petSchema);
module.exports = pet;
