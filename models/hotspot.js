const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotspotSchema = new Schema({
  location: String,
  people: Number,
  drops: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Drop', dropSchema);