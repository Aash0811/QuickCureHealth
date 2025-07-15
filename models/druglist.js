const mongoose = require('mongoose');

const drugSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  company: String,
  quantity: [String],
  medSelling: String,
  perMedCosting: String,
  content: [String],
  side_effects: [String],
  stock: { type: Number, default: 10 }
});

module.exports = mongoose.model('Drug', drugSchema);