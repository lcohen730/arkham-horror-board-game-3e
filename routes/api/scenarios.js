const express = require('express');
const router = express.Router();
const scenariosCtrl = require('../../controllers/api/scenarios');

// GET /api/scenarios
router.get('/', scenariosCtrl.index);
// GET /api/scenarios/:id
router.get('/:id', scenariosCtrl.show);

module.exports = router;