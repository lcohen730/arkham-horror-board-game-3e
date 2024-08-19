const express = require('express');
const router = express.Router();
const mapsCtrl = require('../../controllers/api/maps');

// GET /api/maps
router.get('/', mapsCtrl.index);
// GET /api/maps/:id
router.get('/:id', mapsCtrl.show);

module.exports = router;