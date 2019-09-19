const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ThirakSchema = new Schema({
  category: {
      type:String,
      required: true
  },
  name: {
    type: String,
    required: true
  },
  collg_name: {
    type: String,
    required: true
  },
  participants: {
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
  date: {
    type: Date,
    required: true,
    default:Date.now()
  }
});

module.exports = Thirak = mongoose.model("thirak", ThirakSchema);
