const express = require('express');
const router = express.Router();
const mapCtrl = require('../../controllers/api/maps');

// GET /api/maps
router.get('/', mapCtrl.index);
// GET /api/maps/:id
router.get('/:id', mapCtrl.show);

module.exports = router;