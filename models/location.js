const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/* const neighborhood = require('./neighborhood');
const playerInvestigator = require('./playerInvestigator');
const gameMonster = require('./gameMonster');
const street = require('./street'); */

const locationSchema = new Schema({
    neighborhood: { type: Schema.Types.ObjectId, ref: 'Neighborhood' },
    name: { type: String, required: true },
    doom: { type: Number, required: true },
    investigators: [{ type: Schema.Types.ObjectId, ref: 'PlayerInvestigator' }],
    monsters: [{ type: Schema.Types.ObjectId, ref: 'GameMonster' }],
    adjacentLocations: [{ type: Schema.Types.ObjectId, ref: 'Location'}],
    adjacentStreets: [{ type: Schema.Types.ObjectId, ref: 'Street' }]
});

module.exports = mongoose.model('Location', locationSchema);