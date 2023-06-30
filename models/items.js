const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema({
  title: String,
});
module.exports = mongoose.model("items", itemSchema);
