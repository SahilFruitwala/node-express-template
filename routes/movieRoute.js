const router = require("express").Router();
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const Movie = require("../model/MovieModel");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://root:${process.env.DB_PASS}@main.pgj2f.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (eee) => console.log("DB Connected!", eee)
);

router.get("/", async (req, res) => {
  try {
      const data = await Movie.find();
      res.send(data);
  } catch (error) {
      res.send(error);
  }
});

router.post("/", async (req, res) => {
  const movie = new Movie({
    movieId: uuidv4(),
    name: req.body.name,
    rating: req.body.rating,
  });
  try {
    const saveMovie = await movie.save();
    res.send(saveMovie);
  } catch (err) {
    res.send(err);
  }
});

router.put("/", (req, res) => {
  res.send("Movie Route PUT!");
});

router.delete("/", (req, res) => {
  res.send("Movie Route DELETE!");
});

module.exports = router;
