const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Reday to Rock").status(200);
});

module.exports = router;