const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true 
  },
  photo: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  availability: {
    type: Boolean,
    required: true
  },
  halal: {
    type: Boolean,
    required: true
  },
  kosher: {
    type: Boolean,
    required: true
  },
  vegan: {
    type: Boolean,
    required: true
  },
  raw: {
    type: Boolean,
    required: true
  },
  sugarFree: {
    type: Boolean,
    required: true,
  },
  glutenFree: {
    type: Boolean,
    required: true
  }
});

const productModel = mongoose.model('products', ProductSchema);

module.exports = productModel;