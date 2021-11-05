const mongoose = require("mongoose");
const Client = new mongoose.Schema({
  nume: String,
  prenume:String,
  email: String,
  telefon:String,
  parola: String,
});

module.exports = mongoose.model("Client", Client);