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
  let drop = new Drop(req.body);
  try {
    await drop.save();
    res.status(200).json(res.ok);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

function getHotspots(req,res) {
  Hotspot.find({}, function(err,hotspots){
    res.status(200).json(hotspots);
  }); 
}

function getHotspotByDistrict(req,res){
  Hotspot.find({
    district: req.params.id
  },
    function(err,hotspot){
      res.status(200).json(hotspot);
    }
  );  
}

function getDrops(req,res) {
  Drop.find({}, function(err,drop){
    res.status(200).json(drop);
  }); 
}

function getRecentDrops(req,res){
  Drop.find({}, function(err,drop){
    res.status(200).json(drop);
  }); 
}

function getUserDrops(req,res){
  Drop.find({
    userId: req.params.id
  },
    function(err,drop){
      res.status(200).json(drop);
    }
  );
}

module.exports = {
  addHotspot,
  getHotspots,
  getHotspotByDistrict,
  addDrop,
  getDrops,
  getUserDrops,
  getRecentDrops
};