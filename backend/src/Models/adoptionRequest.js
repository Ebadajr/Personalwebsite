const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adoptionRequestSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
    },
    Address: {
      type: String,
    },
  },
  { timestamps: true }
);

const adoption = mongoose.model("adoption", adoptionRequestSchema);
module.exports = adoption;
