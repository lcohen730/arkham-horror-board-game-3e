const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/* const map = require('./map');
const playerInvestigator = require('./playerInvestigator');
const gameMonster = require('./gameMonster');
const location = require('./location'); */

const neighborhoodSchema = new Schema({
    map: { type: Schema.Types.ObjectId, ref: 'Map' },
    name: { type: String, required: true },
    clues: { type: Number, required: true },
    investigators: [{ type: Schema.Types.ObjectId, ref: 'PlayerInvestigator' }],
    monsters: [{ type: Schema.Types.ObjectId, ref: 'GameMonster' }],
    doom: { type: Number, required: true },
    locations: [{ type: Schema.Types.ObjectId, ref: 'Location' }]
});

module.exports = mongoose.model('Neighborhood', neighborhoodSchema);