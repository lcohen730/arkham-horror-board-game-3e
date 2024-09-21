const express = require('express');
const router = express.Router();
const locationCtrl = require('../../controllers/api/locations');

// POST /api/locations
router.post('/', locationCtrl.create);
// GET /api/locations
router.get('/', locationCtrl.index);
// GET /api/locations/:id
router.get('/:id', locationCtrl.show);
// PUT /api/locations/:id/doom
router.put('/:id/doom', locationCtrl.updateDoomAmt);
// PUT /api/locations/:id/add-investigator
router.put('/:id/add-investigator', locationCtrl.addInvestigator);
// PUT /api/locations/:id/remove-investigator
router.put('/:id/remove-investigator', locationCtrl.removeInvestigator);
// PUT /api/locations/:id/add-monster
router.put('/:id/add-monster', locationCtrl.addMonster);
// PUT /api/locations/:id/remove-monster
router.put('/:id/remove-monster', locationCtrl.removeMonster);
// PUT /api/locations/:id/update-neighborhood
router.put('/:id/update-neighborhood', locationCtrl.updateNeighborhood);

module.exports = router;