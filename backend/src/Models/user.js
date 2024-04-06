const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userOptions={
  discriminationKey:'usertype',
  collection:'users'
};
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
       type: String,
     },
     lastName: {
       type: String,
     },
     mobile:{
        type: Number,
     },
     pets: [{ type: Schema.Types.ObjectId, ref: 'pet' }]
  },
  { timestamps: true },
  userOptions,
);

const user = mongoose.model("user", userSchema);
module.exports = user;
