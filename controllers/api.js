const Hotspot = require('../models/hotspot');
const Drop = require('../models/drop');

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

async function addDrop(req,res) {
  let drop = new drop(req.body);
  try {
    await drop.save();
    res.status(200).json(res.ok);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

function getHotspots(req,res) {
  console.log('asdfasdf');
  Hotspot.find({}, function(err,hotspots){
    res.status(200).json(hotspots);
  }); 
}

module.exports = {
  addHotspot,
  getHotspots,
  addDrop
};