const mongoose = require("mongoose");

const movieListSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  movies: {
    type: String,
    required: true,
  },
  userId: {
    id: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("MovieList", movieListSchema);
