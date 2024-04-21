const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    shelter: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
    },
    amount: {
      type: Number,
    },
  },
  { timestamps: true }
);

const donation = mongoose.model("donation", donationSchema);
module.exports = donation;
