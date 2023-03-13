const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: true 
  },
  photo: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  longDescription: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    required: false
  },
  discountDescription: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: true
  },
  availability: {
    type: Boolean,
    required: true
  },
  alergic: {
    type: Boolean,
    required: true
  },
  alergicDecription: {
    type: String,
    required: false
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

const productModel = mongoose.model('products', productSchema);

module.exports = productModel;