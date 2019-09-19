const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BuddhiSchema = new Schema({
  year: {
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
  branch: {
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

module.exports = Buddhi = mongoose.model("buddhi", BuddhiSchema);
