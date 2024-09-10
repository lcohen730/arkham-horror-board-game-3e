const express = require('express');
const router = express.Router();
const allyCtrl = require('../../controllers/api/allies');

// GET /api/allies
router.get('/', allyCtrl.index);
// GET /api/allies/:id
router.get('/:id', allyCtrl.show);

module.exports = router;