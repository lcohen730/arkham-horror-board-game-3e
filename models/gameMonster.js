const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/* const monster = require('./monster');
const playerInvestigator = require('./playerInvestigator');
const location = require('./location');
const street = require('./street'); */

const gameMonsterSchema = new Schema({
    health: { type: Number, required: true },
    location: { type: Schema.Types.ObjectId, ref: 'Location' },
    street: { type: Schema.Types.ObjectId, ref: 'Street' },
    engagedInvestigator: { type: Schema.Types.ObjectId, ref: 'PlayerInvestigator' },
    monster: { type: Schema.Types.ObjectId, ref: 'Monster' }
});

module.exports = mongoose.model('GameMonster', gameMonsterSchema);