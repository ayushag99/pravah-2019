const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdmadSchema = new Schema({
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
      college:{
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
  
  player4:{
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
  
  player5:{
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
  
});

module.exports = Admad = mongoose.model("admad", AdmadSchema);
