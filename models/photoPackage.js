const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const photoPackageSchema = new Schema({
  photographerId: {
    type: String,
    required: true
  },
  packageId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    default: true
  },
  time: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
});

module.exports = photoPackage = mongoose.model("photoPackage", photoPackageSchema);
