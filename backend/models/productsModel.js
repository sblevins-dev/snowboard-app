const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    img: {
      type: String,
    },
    name: {
      type: String,
      required: [true, "Please enter a name"],
    },
    desc: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
