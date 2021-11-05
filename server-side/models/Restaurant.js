const mongoose = require("mongoose");
const RestaurantSchema = new mongoose.Schema({
  nume: String,
  prenume:String,
  email: String,
  telefon:String,
  parola: String,
});

module.exports = mongoose.model("restaurant", RestaurantSchema);