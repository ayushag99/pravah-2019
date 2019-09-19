const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LetstiktokSchema = new Schema({
  name: {
      type:String,
      required: true
  },
  branch: {
    type: String,
    required: true
  },
  collg_name: {
    type: String,
    required: true
  },

  contact: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  tiktok: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default:Date.now()
  }
});

module.exports = Letstiktok = mongoose.model("letstiktok", LetstiktokSchema);
