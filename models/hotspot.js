const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotspotSchema = new Schema({
  location: String,
  people: Number,
  drops: Number,
  image: String,
  district: Number,
  need: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Hotspot', hotspotSchema);