const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/* const playerInvestigator = require('./playerInvestigator');
const gameMonster = require('./gameMonster');
const location = require('./location'); */

const streetSchema = new Schema({
    type: { type: String, required: true },
    investigators: [{ type: Schema.Types.ObjectId, ref: 'PlayerInvestigator' }],
    monsters: [{ type: Schema.Types.ObjectId, ref: 'GameMonster' }],
    adjacentLocations: [{ type: Schema.Types.ObjectId, ref: 'Location' }],
});

module.exports = mongoose.model('Street', streetSchema);