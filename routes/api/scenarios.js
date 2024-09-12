const express = require('express');
const router = express.Router();
const scenarioCtrl = require('../../controllers/api/scenarios');

// GET /api/scenarios
router.get('/', scenarioCtrl.index);
// GET /api/scenarios/:id
router.get('/:id', scenarioCtrl.show);

module.exports = router;