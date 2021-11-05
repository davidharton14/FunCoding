const mongoose = require("mongoose");
const ProdusSchema = new mongoose.Schema({
  prenume_produs:String,
  denumire_restaurant: String,
  pret:String,
  cantitatea: String,
});

module.exports = mongoose.model("product", ProdusSchema);