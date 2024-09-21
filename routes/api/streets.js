const express = require('express');
const router = express.Router();
const streetCtrl = require('../../controllers/api/streets');

// POST /api/street
router.post('/', streetCtrl.create);
// GET /api/street
router.get('/', streetCtrl.index);
// GET /api/street/:id
router.get('/:id', streetCtrl.show);
// PUT /api/street/:id/add-investigator
router.put('/:id/add-investigator', streetCtrl.addInvestigator);
// PUT /api/street/:id/remove-investigator
router.put('/:id/remove-investigator', streetCtrl.removeInvestigator);
// PUT /api/street/:id/add-monster
router.put('/:id/add-monster', streetCtrl.addMonster);
// PUT /api/street/:id/remove-monster
router.put('/:id/remove-monster', streetCtrl.removeMonster);

module.exports = router;