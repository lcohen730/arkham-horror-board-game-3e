const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scenarioSchema = new Schema({
    name: { type: String, required: true },
    startingLocation: { type: String, required: true },
    monsterDeck: { type: Array, required: true },
    mythosCup: { type: Array, required: true },
    startingCodex: { type: Array, required: true },
    anomalyDeck: { type: String, required: true },
    startingDoomLocations: { type: Array, required: true },
    startingCreatures: { type: Array, required: true },
    startingCreaturesLocations: { type: Array, required: true }
});

module.exports = mongoose.model('Scenario', scenarioSchema);