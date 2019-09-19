const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CubgSchema = new Schema({
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
      branch:{
          type:String,
          required:true,
      },
      year:{
          type:String,
          required:true,
      },
      
  },
  player2:{
    name:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    branch:{
        type:String,
        required:true,
    },
  },
  college:{
      type:String,
      required:true
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

module.exports = Cubg = mongoose.model("cubg", CubgSchema);
