const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const monsterSchema = new Schema({
	name: { type: String, required: true },
	type: { type: String, required: true },
	movement: Number,
	spawnLocation: String, // 'most doom', 'unstable space'
	spawnStreet: String, // 'nearest leader', 'nearest prey'
	remnant: { type: Boolean, default: false, required: true },
	health: { type: Number, /* required: true */ },
	attackMod: { type: Number, /* required: true */ },
	evadeMod: { type: Number, /* required: true */ },
	healthDmg: { type: Number, /* required: true */ },
	sanityDmg: { type: Number, /* required: true */ },
	activation: { type: String, /* required: true */ }, // 'hunter', 'patrol', or 'lurker'
	moveTarget: String, // 'most doom', 'lowest strength', 'highest lore', 'unstable space', 'most clues', 'lowest influence', 'lowest observation', 'highest observation', 'most remnants'
	engageTarget: String, // 'most spells', 'lowest strength', 'highest lore', 'highest influence', 'most clues', 'lowest influence', 'lowest observation', 'highest observation', 'most remnants'
	doomPlacement: String, // 'any adjacent space', 'adjacent space with most doom', 'in this space', 'move one doom from this space to the scenario sheet'
	elusive: { type: Boolean, default: false, required: true }
});

module.exports = mongoose.model('Monster', monsterSchema);
