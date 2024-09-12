const express = require('express');
const router = express.Router();
const itemCtrl = require('../../controllers/api/items');

// GET /api/items
router.get('/', itemCtrl.index);
// GET /api/items/:id
router.get('/:id', itemCtrl.show);

module.exports = router;