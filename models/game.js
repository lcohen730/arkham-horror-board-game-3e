const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commonMethods = require('./commonMethods');

const gameSchema = new Schema({
    investigators: [{ type: Schema.Types.ObjectId, ref: 'PlayerInvestigator' }],
    scenario: { type: Schema.Types.ObjectId, ref: 'GameScenario' },
    archive: { type: Array, required: true },
    headlines: { type: Array, required: true }
});

gameSchema.methods.addToArray = commonMethods.addToArray;
gameSchema.methods.removeFromArray = commonMethods.removeFromArray;

module.exports = mongoose.model('Game', gameSchema);