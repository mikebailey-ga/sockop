const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api.js');

router.get('/hotspot', apiController.getHotspots);
router.get('/hotspot/:id', apiController.getHotspotByDistrict);
router.post('/hotspot/add', apiController.addHotspot);


router.get('/drop', apiController.getDrops);
router.get('/drop/recent', apiController.getRecentDrops);
router.get('/drop/:id', apiController.getUserDrops);
router.post('/drop/add', apiController.addDrop);

module.exports = router;