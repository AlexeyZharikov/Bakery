const mongoose = require('mongoose');

const { Schema } = mongoose;

const adminUserSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    }
})

const aadminUserModel = mongoose.model('admin-User', adminUserSchema);

module.exports = aadminUserModel;