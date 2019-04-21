const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const picSchema = new Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  // imageLink: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Pic = mongoose.model("Pic", picSchema);

module.exports = Pic;
