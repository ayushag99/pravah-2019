const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  studentDetails:{
          name:{
              type:String,
              required:true
          },
          contactNo:{
              type:String
          },
          'sem_bran':{
              type:String
          },
          email:{
              type:String,
              required:true
          }
      },
  eventDetails:{
      'type':{
          type:String,
          required:true
      },
      'name':{
          type:String,
          required:true
      },
      'desc':{
          type:String,
          required:true
      },
      'venue':{
          type:String,
          required:true
      },
      'duration':{
          type:String,
          required:true
      },
      'budget':{
          type:String,
          required:true
      },
      'prize':{
          type:String,
          required:true
      },
      'sponsor':{
          type:String
      },
      'sponsor_name':{
          type:String
      },
      'sponsor_amount':{

      }
      
  },
  facultyDetails:{
      'faculty_name':{
          type:String,
          required:true
      },
      'faculty_dep':{
          type:String,
          required:true
      },
      'faculty_contact':{
          type:String,
          required:true
      },
      
  },
  date:{
      type:Date,
      default:Date.now()
  }
});

module.exports = Event = mongoose.model("Events", EventSchema)
