const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shelterRequestSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
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

const shelterRequest = mongoose.model("shelterRequest", shelterRequestSchema);
module.exports = shelterRequest;
