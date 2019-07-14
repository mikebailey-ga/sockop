const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api.js');

router.post('/hotspot/add', apiController.addHotspot);

module.exports = router;