const express = require('express');
const router = express.Router();
const gameScenarioCtrl = require('../../controllers/api/gameScenarios');

// POST /api/game-scenarios
router.post('/', gameScenarioCtrl.create);
// PUT /api/game-scenarios/:id/add-mythos-token
router.put('/:id/add-mythos-token', gameScenarioCtrl.addTokenToMythosCup);
// PUT /api/game-scenarios/:id/remove-mythos-token
router.put('/:id/remove-mythos-token', gameScenarioCtrl.removeTokenFromMythosCup);
// PUT /api/game-scenarios/:id/doom
router.put('/:id/doom', gameScenarioCtrl.updateDoom);
// PUT /api/game-scenarios/:id/clues
router.put('/:id/clues', gameScenarioCtrl.updateClues);

module.exports = router;