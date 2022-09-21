const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sneakersSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
      required: false,
    },
    stock: {
      type: Number,
      required: true,
    },
    url: {
      image1: {
        type: String,
        required: true,
      },
      imageThumbnail1: {
        type: String,
        required: true,
      },
      image2: {
        type: String,
        required: true,
      },
      imageThumbnail2: {
        type: String,
        required: true,
      },
      image3: {
        type: String,
        required: false,
      },
      imageThumbnail3: {
        type: String,
        required: false,
      },
      image4: {
        type: String,
        required: false,
      },
      imageThumbnail4: {
        type: String,
        required: false,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sneaker", sneakersSchema);
