const express = require("express");
const Sneakers = require("../models/sneakersModel");

// instance of the router
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "GET all sneakers!" });
});

router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single pair of sneaker!" });
});

router.post("/", async (req, res) => {
  const { brand, name, description, price, discountPrice, stock } = req.body;
  const {
    image1,
    imageThumbnail1,
    image2,
    imageThumbnail2,
    image3,
    imageThumbnail3,
    image4,
    imageThumbnail4,
  } = req.body.url;

  try {
    const sneakers = await Sneakers.create({
      brand,
      name,
      description,
      price,
      discountPrice,
      stock,
      url: {
        image1,
        imageThumbnail1,
        image2,
        imageThumbnail2,
        image3,
        imageThumbnail3,
        image4,
        imageThumbnail4,
      },
    });
    res.status(200).json(sneakers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a pair of sneaker!" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a pair of sneaker!" });
});

module.exports = router;
