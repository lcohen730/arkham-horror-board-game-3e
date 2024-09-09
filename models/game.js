const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const playerInvestigator = require('./playerInvestigator');
const gameScenario = require('./gameScenario');
const commonMethods = require('./commonMethods');

const gameSchema = new Schema({
    investigators: [playerInvestigator],
    scenario: gameScenario,
    archive: { type: Array, required: true },
    headlines: { type: Array, required: true }
});

gameSchema.methods.addToArray = commonMethods.addToArray;
gameSchema.methods.removeFromArray = commonMethods.removeFromArray;

module.exports = mongoose.model('Game', gameSchema);