const express = require('express');
const router = express.Router();
const monsterCtrl = require('../../controllers/api/monsters');

// GET /api/monsters
router.get('/', monsterCtrl.index);
// GET /api/monsters/:id
router.get('/:id', monsterCtrl.show);

module.exports = router;