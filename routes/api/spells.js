const express = require('express');
const router = express.Router();
const spellCtrl = require('../../controllers/api/spells');

// GET /api/spells
router.get('/', spellCtrl.index);
// GET /api/spells/:id
router.get('/:id', spellCtrl.show);

module.exports = router;