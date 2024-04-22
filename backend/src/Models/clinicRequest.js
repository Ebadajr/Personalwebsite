const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clinicRequestSchema = new Schema(
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

const clinicRequest = mongoose.model("clinicRequest", clinicRequestSchema);
module.exports = clinicRequest;
