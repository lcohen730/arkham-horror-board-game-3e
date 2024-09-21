const express = require('express');
const router = express.Router();
const playerInvestigatorCtrl = require('../../controllers/api/playerInvestigators');

/* ------------------ CREATE ------------------ */
// POST /api/player-investigators
router.post('/', playerInvestigatorCtrl.create);
/* ------------------ READ ------------------ */
// GET /api/player-investigators
router.get('/', playerInvestigatorCtrl.index);
// GET /api/player-investigators/:id
router.get('/:id', playerInvestigatorCtrl.show);
/* ------------------ UPDATE ------------------ */
// PUT /api/player-investigators/:id/focus-limit
router.put('/:id/focus-limit', playerInvestigatorCtrl.updateFocusLimit);
// PUT /api/player-investigators/:id/health
router.put('/:id/health', playerInvestigatorCtrl.updateHealth);
// PUT /api/player-investigators/:id/sanity
router.put('/:id/sanity', playerInvestigatorCtrl.updateSanity);
// PUT /api/player-investigators/:id/lore
router.put('/:id/lore', playerInvestigatorCtrl.updateLore);
// PUT /api/player-investigators/:id/influence
router.put('/:id/influence', playerInvestigatorCtrl.updateInfluence);
// PUT /api/player-investigators/:id/observation
router.put('/:id/observation', playerInvestigatorCtrl.updateObservation);
// PUT /api/player-investigators/:id/strength
router.put('/:id/strength', playerInvestigatorCtrl.updateStrength);
// PUT /api/player-investigators/:id/will
router.put('/:id/will', playerInvestigatorCtrl.updateWill);
// PUT /api/player-investigators/:id/money
router.put('/:id/money', playerInvestigatorCtrl.updateMoneyAmt);
// PUT /api/player-investigators/:id/add-focus
router.put('/:id/add-focus', playerInvestigatorCtrl.addFocus);
// PUT /api/player-investigators/:id/remove-focus
router.put('/:id/remove-focus', playerInvestigatorCtrl.removeFocus);
// PUT /api/player-investigators/:id/remnants
router.put('/:id/remnants', playerInvestigatorCtrl.updateRemnants);
// PUT /api/player-investigators/:id/clues
router.put('/:id/clues', playerInvestigatorCtrl.updateClues);
// PUT /api/player-investigators/:id/engage-monster
router.put('/:id/engage-monster', playerInvestigatorCtrl.engageMonster);
// PUT /api/player-investigators/:id/disengage-monster
router.put('/:id/disengage-monster', playerInvestigatorCtrl.disengageMonster);
// PUT /api/player-investigators/:id/add-item
router.put('/:id/add-item', playerInvestigatorCtrl.addItem);
// PUT /api/player-investigators/:id/remove-item
router.put('/:id/remove-item', playerInvestigatorCtrl.removeItem);
// PUT /api/player-investigators/:id/add-spell
router.put('/:id/add-spell', playerInvestigatorCtrl.addSpell);
// PUT /api/player-investigators/:id/remove-spell
router.put('/:id/remove-spell', playerInvestigatorCtrl.removeSpell);
// PUT /api/player-investigators/:id/add-ally
router.put('/:id/add-ally', playerInvestigatorCtrl.addAlly);
// PUT /api/player-investigators/:id/remove-ally
router.put('/:id/remove-ally', playerInvestigatorCtrl.removeAlly);
// PUT /api/player-investigators/:id/add-condition
router.put('/:id/add-condition', playerInvestigatorCtrl.addCondition);
// PUT /api/player-investigators/:id/remove-condition
// router.put('/:id/remove-condition', playerInvestigatorCtrl.removeCondition);
// PUT /api/player-investigators/:id/location
router.put('/:id/location', playerInvestigatorCtrl.updateLocation);
// PUT /api/player-investigators/:id/street
router.put('/:id/street', playerInvestigatorCtrl.updateStreet);
/* ------------------ DELETE ------------------ */
// DELETE /api/player-investigators/:id
router.delete('/:id', playerInvestigatorCtrl.deleteInvestigator);

module.exports = router;