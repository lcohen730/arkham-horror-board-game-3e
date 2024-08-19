const express = require('express');
const router = express.Router();
const alliesCtrl = require('../../controllers/api/allies');

// GET /api/allies
router.get('/', alliesCtrl.index);
// GET /api/allies/:id
router.get('/:id', alliesCtrl.show);

module.exports = router;