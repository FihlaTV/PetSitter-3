const router = require("express").Router();
const booksController = require("../../controllers/petSitterController");

//This page calls the controllers

// Matches with "/api/hello"
router.get("/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

module.exports = router;
