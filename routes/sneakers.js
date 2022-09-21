const express = require("express");

// instance of the router
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "GET all sneakers!" });
});

router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single pair of sneaker!" });
});

router.post("/", (req, res) => {
  res.json({ msg: "POST a new pair of sneakers!" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a pair of sneaker!" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a pair of sneaker!" });
});

module.exports = router;
