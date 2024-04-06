const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rescueSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
       type: String,
     },
     location: {
        type: String,
     },
    
  },
  { timestamps: true },
  
);

const rescue = mongoose.model("rescue", rescueSchema);
module.exports = rescue;
