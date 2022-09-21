const Sneakers = require("../models/sneakerModel");
const mongoose = require("mongoose");

// get all sneakers
const getSneakers = async (req, res) => {
  const sneakers = await Sneakers.find({}).sort({ createdAt: -1 });

  res.status(200).json(sneakers);
};

// get a single pair of sneakers
const getSneaker = async (req, res) => {
  const { id } = req.params;

  // check if id is valid according to mongoDb
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such sneaker" });
  }

  const sneaker = await Sneakers.findById(id);
  if (!sneaker) {
    return res.status(404).json({ error: "no such sneaker" });
  }
  res.status(200).json(sneaker);
};

// create a new pair of sneakers
const createSneakers = async (req, res) => {
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

  // add doc to db
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
};

// delete a pair of sneakers

// update a pair of sneakers

module.exports = { getSneakers, getSneaker, createSneakers };