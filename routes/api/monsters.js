const express = require('express');
const router = express.Router();
const monstersCtrl = require('../../controllers/api/monsters');

// GET /api/monsters
router.get('/', monstersCtrl.index);
// GET /api/monsters/:id
router.get('/:id', monstersCtrl.show);

module.exports = router;