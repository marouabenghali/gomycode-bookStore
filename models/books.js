const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BookSchema = new Schema({
    title: {
        type: String,
        required: true
  },
    image: {
        type: String,
        required: true
  },
    auteur: {
        type: String,
        required: true
  },
    bookType: {
        type: String,
        required: true
  },
    quantity: {
        type: Number,
        required: true
  },
    price: {
        type: Number,
        required: true
  },
    rate: {
        type: Number,
        required: true
  },
    label: {
        type: String,
        required: true
  },
    description: {
        type: String,
        required: true
  }
});

module.exports = Book = mongoose.model("book", BookSchema);