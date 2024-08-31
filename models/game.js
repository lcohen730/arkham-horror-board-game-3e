const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const playerInvestigator = require('./playerInvestigator');
const scenario = require('./scenario');

const gameScenario = new Schema({
    doom: { type: Number, required: true },
    clues: { type: Number, required: true },
    scenario: scenario
})

const gameSchema = new Schema({
    investigators: [playerInvestigator],
    scenario: gameScenario,
    archive: { type: Array, required: true },
    headlines: { type: Array, required: true }
});

module.exports = mongoose.model('Game', gameSchema);