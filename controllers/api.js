const Hotspot = require('../models/hotspot');


async function addHotspot(req,res) {
  let hotspot = new Hotspot(req.body);
  try {
    await hotspot.save();
    res.status(200).json(res.ok);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

module.exports = {
  addHotspot
};