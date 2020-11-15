const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Template Done!!");
});

module.exports = router;
