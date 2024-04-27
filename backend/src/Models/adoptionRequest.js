const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adoptionRequestSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    PetName: {
      type: String,
    },
    Breed: {
      type: String,
    },
  },
  { timestamps: true }
);

const adoption = mongoose.model("adoption", adoptionRequestSchema);
module.exports = adoption;
