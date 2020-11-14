const router = require("express").Router();
const mongoose = require('mongoose')

mongoose.connect(
  `mongodb+srv://root:${process.env.DB_PASSWORD}@main.pgj2f.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("DB Connected!")
);

router.get("/", (req, res) => {
  res.send("Template Done!!");
});

router.post("/", (req, res) => {
  res.send("Template Done!!");
});

router.put("/", (req, res) => {
  res.send("Template Done!!");
});

router.delete("/", (req, res) => {
  res.send("Template Done!!");
});

module.exports = router;