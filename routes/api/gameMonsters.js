const express = require('express');
const router = express.Router();
const gameMonsterCtrl = require('../../controllers/api/gameMonsters');

// POST /api/game-monsters
router.post('/', gameMonsterCtrl.create);
// GET /api/game-monsters
router.get('/', gameMonsterCtrl.index);
// GET /api/game-monsters/:id
router.get('/:id', gameMonsterCtrl.show);
// PUT /api/game-monsters/:id/health
router.put('/:id/health', gameMonsterCtrl.updateMonsterHealth);
// PUT /api/game-monsters/:id/location
router.put('/:id/location', gameMonsterCtrl.updateMonsterLocation);

module.exports = router;