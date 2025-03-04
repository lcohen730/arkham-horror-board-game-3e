const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commonMethods = require('./commonMethods');

const gameSchema = new Schema({
	investigators: [{ type: Schema.Types.ObjectId, ref: 'PlayerInvestigator' }],
	scenario: { type: Schema.Types.ObjectId, ref: 'GameScenario' },
	archive: { type: Array, required: true },
	headlines: { type: Array, required: true },
	store: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
	activeEvent: { type: Schema.Types.ObjectId, ref: 'Event' }
});

gameSchema.methods.addToArray = commonMethods.addToArray;
gameSchema.methods.removeFromArray = commonMethods.removeFromArray;

module.exports = mongoose.model('Game', gameSchema);
