const mongoose = require('mongoose');

const { Schema } = mongoose;

const tokenSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'admin-user'
    },
    refreshToken: {
      type: String,
      required: true,
    }
})

const tokenModel = mongoose.model('token', tokenSchema);

module.exports = tokenModel;