const mongoose = require("mongoose");
const ClientSchema = new mongoose.Schema({
  nume: String,
  prenume:String,
  email: String,
  telefon:String,
  parola: String,
});

module.exports = mongoose.model("customer", ClientSchema);