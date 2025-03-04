const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const monsterSchema = new Schema({
	name: { type: String, required: true },
	type: { type: String, required: true },
	movement: Number,
	spawnLocation: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
	spawnStreet: { type: mongoose.Schema.Types.ObjectId, ref: 'Street' },
	remnant: { type: Boolean, default: false, required: true },
	health: { type: Number, required: true },
	attackMod: { type: Number, required: true },
	evadeMod: { type: Number, required: true },
	healthDmg: { type: Number, required: true },
	sanityDmg: { type: Number, required: true },
	activation: { type: String, required: true } // hunter, patrol, or lurker
});

module.exports = mongoose.model('Monster', monsterSchema);
