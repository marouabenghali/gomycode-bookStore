const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BookSchema = new Schema({
    title: {
        type: String,
       
  },
    img: {
        type: String,
        
  },
    auteur: {
        type: String,
       
  },
    type: {
        type: String,
       
  },
    qt: {
        type: Number,
     
  },
    price: {
        type: Number,
        
  },
    rate: {
        type: Number,
       
  },
    label: {
        type: String,
    
  },
    description: {
        type: String,
      
  }
});

module.exports = Book = mongoose.model("book", BookSchema);