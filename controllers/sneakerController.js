const Sneakers = require("../models/sneakerModel");

// get all sneakers
const getSneakers = async (req, res) => {
  const sneakers = await Sneakers.find({}).sort({ createdAt: -1 });

  res.status(200).json(sneakers);
};

// get a single pair of sneakers

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

module.exports = { getSneakers, createSneakers };
