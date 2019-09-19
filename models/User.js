const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  dept: {
      type:String,
      required: true
  },
  id: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = Event = mongoose.model("Users", UserSchema);
