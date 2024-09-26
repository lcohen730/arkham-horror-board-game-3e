const express = require('express');
const router = express.Router();
const eventCtrl = require('../../controllers/api/events');

// GET /api/events
router.get('/', eventCtrl.index);
// GET /api/events/:id
router.get('/:id', eventCtrl.show);
// GET /api/events/scenario/:id
router.get('/scenario/:id', eventCtrl.showByScenario);

module.exports = router;
