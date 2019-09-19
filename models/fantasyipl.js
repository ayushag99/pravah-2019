const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FantasyiplSchema = new Schema({
    college:{type:String, required:true},
  player1:{
      name:{
          type:String,
          required:true,
      },
      email:{
          type:String,
          required:true,
      },
      contact:{
          type:String,
          required:true,
      },
  },
  player2:{
      name:{
          type:String,
          required:true,
      },
      email:{
          type:String,
          required:true,
      },
      contact:{
          type:String,
          required:true,
      },
  },
  player3:{
      name:{
          type:String,
          required:true,
      },
      email:{
          type:String,
          required:true,
      },
      contact:{
          type:String,
          required:true,
      },
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
  }
});

module.exports = Fantasyipl = mongoose.model("fantasyipl", FantasyiplSchema);
