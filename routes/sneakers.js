const express = require("express");
const {
  getSneakers,
  createSneakers,
} = require("../controllers/sneakerController");

// instance of the router
const router = express.Router();

router.get("/", getSneakers);

router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single pair of sneaker!" });
});

router.post("/", createSneakers);

router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a pair of sneaker!" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a pair of sneaker!" });
});

module.exports = router;
