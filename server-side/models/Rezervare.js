const mongoose = require("mongoose");
const RezervareSchema = new mongoose.Schema({
  denumire_restaurant: String,
  denumire_mancare: String,
  cantitate:String,
  pret:String,
  id_client:String
});

module.exports = mongoose.model("reservation", RezervareSchema);