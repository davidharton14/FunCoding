const mongoose = require("mongoose");
const RezervareSchema = new mongoose.Schema({
  nume: String,
  prenume:String,
  denumire_mancare: String,
  denumire_restaurant:String,
  data: String,
});

module.exports = mongoose.model("reservation", RezervareSchema);