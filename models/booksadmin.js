const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BookAdminSchema = new Schema({
  title: {
    type: String,
   
  },
  img: {
    type: String,
    
  },
  price: {
    type: Number,
    
  },
  qt: {
    type: Number,
    
  },
  type: {
    type: String,
  
  },
  label: {
    type: String,
    
  },
  description: {
    type: String,
  
  }
});

module.exports = BookAdmin = mongoose.model("bookadmin", BookAdminSchema);
