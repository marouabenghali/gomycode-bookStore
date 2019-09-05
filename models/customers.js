const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  name: {
    type: String,
    
  },
  email: {
    type: String,
   
  },
  password: {
    type: String,
    
  },
  passwordconfirmation: {
    type: String,
    
  },
  
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Customer = mongoose.model("customers", CustomerSchema);
