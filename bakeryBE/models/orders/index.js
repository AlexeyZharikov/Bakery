const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  orderNum: {
    type: String,
    required: true
  }, 
  items: [{
      title: String,
      count: Number,
      price: Number
  }],
  total: {
    type: Number,
    required: true
  },
  clientName: {
    type: String,
    required: true
  }, 
  clientPhone: {
    type: String,
    required: true
  },
  clientEmail: {
    type: String,
    required: false
  },
  clientComment:{
    type: String,
    required: false
  }
});

const orderModel = mongoose.model('orders', orderSchema);

module.exports = orderModel;