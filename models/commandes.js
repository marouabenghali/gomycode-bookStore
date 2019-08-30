const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CommandeSchema = new Schema({
   idclient:{
      type: Number,
      required: true
   },
   idbook :{
      type: Number,
      required: true
   },
    quantitytot: {
        type: Number,
        required: true
  },
    prixtot: {
        type: Number,
        required: true
  }
   
});

module.exports = Commande = mongoose.model("commande", CommandeSchema);