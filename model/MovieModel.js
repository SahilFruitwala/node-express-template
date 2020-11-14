const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: Date,
    required: false,
  },
  rating: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  genre: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
