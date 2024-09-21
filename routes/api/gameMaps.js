const express = require('express');
const router = express.Router();
const gameMapCtrl = require('../../controllers/api/gameMaps');

// POST /api/game-maps
router.post('/', gameMapCtrl.create);
// GET /api/game-maps/:id
router.get('/:id', gameMapCtrl.show);
// PUT /api/game-maps/:id/unstable-space
router.put('/:id/unstable-space', gameMapCtrl.updateUnstable);

module.exports = router;