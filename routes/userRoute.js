const router = require("express").Router();

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