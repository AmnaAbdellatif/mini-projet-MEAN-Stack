const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
   productName: {
      type: String,
      required: true
   },
   description: {
      type: String,
   },
   price: {
      type: String,
   },
   category: {
      type: String,
      
   },
   imageUrl: {
      type: String,
   },
   reviews:
    [{ value: Number, content: String }],

      
   },
);
module.exports = Product = mongoose.model("products", productSchema);