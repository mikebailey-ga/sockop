const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dropSchema = new Schema({
  location: String,
  district: String,
  count: Number,
  pairs: Number,
  userId: {type: Schema.Types.ObjectId, ref: 'User'},
  hotspot: {type: Schema.Types.ObjectId, ref: 'Hotspot'}
}, {
  timestamps: true
});

module.exports = mongoose.model('Drop', dropSchema);