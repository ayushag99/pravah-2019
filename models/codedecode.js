const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CodedecodeSchema = new Schema({
    name: {
        type: String,
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
      
  
  paytm: {
    name: {
        type: String,
        required: true
      },
      number: {
        type: String,
        required: true
      },
      transid: {
        type: String,
        required: true
      },
      
  },
  
  
  
  date: {
    type: Date,
    required: true,
    default:Date.now()
  }
});

module.exports = Codedecode = mongoose.model("codedecode", CodedecodeSchema);
