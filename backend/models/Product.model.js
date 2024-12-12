// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  imageUrl: [{ type: String, required: true }],
  stock: { type: Number, default: 0 },
  size:[{type:String}]
});

module.exports = mongoose.model("Product", productSchema);