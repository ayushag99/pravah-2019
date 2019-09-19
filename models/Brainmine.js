const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BrainmineSchema = new Schema({
  player1: {
    name: {
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
      branch: {
        type: String,
        required: true
      },
      year: {
        type: String,
        required: true
      },
  },
  player2: {
    name: {
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
      branch: {
        type: String,
        required: true
      },
      year: {
        type: String,
        required: true
      },
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

module.exports = Brainmine = mongoose.model("brainmine", BrainmineSchema);
