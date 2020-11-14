const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  movieId: {
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
  },
  rating: {
    type: String,
  },
  description: {
    type: String,
  },
  genre: {
    type: String,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
