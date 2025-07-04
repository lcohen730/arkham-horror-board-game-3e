const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commonMethods = require('./commonMethods');

const gameMonsterSchema = new Schema({
    health: Number,
    location: { type: Schema.Types.ObjectId, ref: 'Location' },
    street: { type: Schema.Types.ObjectId, ref: 'Street' },
    engagedInvestigator: { type: Schema.Types.ObjectId, ref: 'PlayerInvestigator' },
    exhausted: { type: Boolean },
    monster: { type: Schema.Types.ObjectId, ref: 'Monster' }
});

gameMonsterSchema.methods.updateHealth = function (newHealth) {
    this.health = newHealth;
    return this.save();
}

// this method can be used for location or street
gameMonsterSchema.methods.updateSchemaObject = commonMethods.updateSchemaObject;

gameMonsterSchema.methods.toggleExhausted = function () {
    this.exhausted = !this.exhausted;
    return this.save();
}

module.exports = mongoose.model('GameMonster', gameMonsterSchema);