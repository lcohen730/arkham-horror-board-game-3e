const express = require('express');
const router = express.Router();
const spellsCtrl = require('../../controllers/api/spells');

// GET /api/spells
router.get('/', spellsCtrl.index);
// GET /api/spells/:id
router.get('/:id', spellsCtrl.show);

module.exports = router;