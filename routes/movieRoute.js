const router = require("express").Router();
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const Movie = require("../model/MovieModel");

mongoose.connect(
  `mongodb+srv://root:${process.env.DB_PASSWORD}@main.pgj2f.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("DB Connected!")
);

router.get("/", (req, res) => {
  res.send("Movie Route GET!");
});

router.post("/", (req, res) => {
  const movie = new Movie({
    id: uuidv4(),
    name: req.body.name,
    rating: req.body.rating,
  });

  movie
    .save()
    .exec()
    .then((data) => {
      res.json(data);
    }).catch(err => {
        res.json({msg:`Error: ${err}`})
    })
});

router.put("/", (req, res) => {
  res.send("Movie Route PUT!");
});

router.delete("/", (req, res) => {
  res.send("Movie Route DELETE!");
});

module.exports = router;
