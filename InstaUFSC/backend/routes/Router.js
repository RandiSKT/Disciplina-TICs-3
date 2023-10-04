const express = require("express");
const router = express();

// test route
router.get("/", (req, res) => {
  res.send("API funcionando!");
});

module.exports = router;
