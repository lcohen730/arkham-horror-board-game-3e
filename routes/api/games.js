const express = require('express');
const router = express.Router();
const gameCtrl = require('../../controllers/api/games');

// POST /api/games
router.post('/', gameCtrl.create);
// PUT /api/games/:id/add-investigator
router.put('/:id/add-investigator', gameCtrl.addInvestigator);
// PUT /api/games/:id/remove-investigator
router.put('/:id/remove-investigator', gameCtrl.removeInvestigator);

module.exports = router;