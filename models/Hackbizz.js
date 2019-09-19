const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HackbizzSchema = new Schema({
  
  name: {
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
  paytm:{
    number:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    transid:{
        type:String,
        required:true,
    },
},
  date: {
    type: Date,
    required: true,
    default:Date.now()
  }
});

module.exports = Hackerbizz = mongoose.model("hackerbizz", HackbizzSchema);
