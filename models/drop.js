const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dropSchema = new Schema({
  location: String,
  district: Number,
  count: Number,
  pairs: Number,
  userId: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
  timestamps: true
});

module.exports = mongoose.model('Drop', dropSchema);