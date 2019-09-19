const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PerformerSchema = new Schema({
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
  date: {
    type: Date,
    required: true,
    default:Date.now()
  }
});

module.exports = Performer = mongoose.model("performer", PerformerSchema);
