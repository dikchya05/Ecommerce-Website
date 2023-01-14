const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemsSchema = new Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    itemType: { type: String, required: true },
    price:{ type: String, required: true },
    size:{ type: String, required: true },
    quantity:{ type: String, required: true }
  },
  { collection: "items" }
);

module.exports = mongoose.model("items", itemsSchema);