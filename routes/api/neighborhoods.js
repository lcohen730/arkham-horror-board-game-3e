const express = require('express');
const router = express.Router();
const neighborhoodCtrl = require('../../controllers/api/neighborhoods');

// POST /api/neighborhoods
router.post('/', neighborhoodCtrl.create);
// GET /api/neighborhoods
router.get('/', neighborhoodCtrl.index);
// GET /api/neighborhoods/:id
router.get('/:id', neighborhoodCtrl.show);
// PUT /api/neighborhoods/:id/clues
router.put('/:id/clues', neighborhoodCtrl.updateClues);
// PUT /api/neighborhoods/:id/add-investigator
router.put('/:id/add-investigator', neighborhoodCtrl.addInvestigatorToNeighborhood);
// PUT /api/neighborhoods/:id/remove-investigator
router.put('/:id/remove-investigator', neighborhoodCtrl.removeInvestigatorFromNeighborhood);
// PUT /api/neighborhoods/:id/add-monster
router.put('/:id/add-monster', neighborhoodCtrl.addMonsterToNeighborhood);
// PUT /api/neighborhoods/:id/remove-monster
router.put('/:id/remove-monster', neighborhoodCtrl.removeMonsterFromNeighborhood);
// PUT /api/neighborhoods/:id/doom
router.put('/:id/doom', neighborhoodCtrl.updateDoom);
// PUT /api/neighborhoods/:id/anomaly
router.put('/:id/anomaly', neighborhoodCtrl.toggleAnomalyStatus);

module.exports = router;