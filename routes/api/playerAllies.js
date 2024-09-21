const express = require('express');
const router = express.Router();
const playerAllyCtrl = require('../../controllers/api/playerAllies');

// POST /api/player-allies
router.post('/', playerAllyCtrl.create);
// GET /api/player-allies
router.get('/', playerAllyCtrl.index);
// GET /api/player-allies/:id
router.get('/:id', playerAllyCtrl.show);
// GET /api/player-allies/investigator/:id
router.get('/investigator/:id', playerAllyCtrl.showByInvestigator);
// PUT /api/player-allies/:id/health
router.put('/:id/health', playerAllyCtrl.updateHealth);
// PUT /api/player-allies/:id/sanity
router.put('/:id/sanity', playerAllyCtrl.updateSanity);
// DELETE /api/player-allies/:id
router.delete('/:id', playerAllyCtrl.deleteAlly);

module.exports = router;