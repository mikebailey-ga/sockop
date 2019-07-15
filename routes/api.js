const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api.js');

router.get('/hotspot', apiController.getHotspots);
router.post('/hotspot/add', apiController.addHotspot);

router.post('/drop/add', apiController.addDrop);

module.exports = router;