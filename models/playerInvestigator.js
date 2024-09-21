const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commonMethods = require('./commonMethods');

const playerInvestigatorSchema = new Schema(
    {
        focusLimit: { type: Number, required: true },
        health: { type: Number, required: true },
        sanity: { type: Number, required: true },
        lore: { type: Number, required: true },
        influence: { type: Number, required: true },
        observation: { type: Number, required: true },
        strength: { type: Number, required: true },
        will: { type: Number, required: true },
        money: { type: Number, required: true },
        focusTokens: { type: Array, required: true },
        remnants: { type: Number, required: true },
        clues: { type: Number, required: true },
        engagedMonsters: [{ type: Schema.Types.ObjectId, ref: 'GameMonster' }],
        items: [{ type: Schema.Types.ObjectId, ref: 'PlayerItem' }],
        spells: { type: Array, required: true },
        allies: [{ type: Schema.Types.ObjectId, ref: 'PlayerAlly' }],
        conditions: { type: Array, required: true },
        location: { type: Schema.Types.ObjectId, ref: 'Location' },
        street: { type: Schema.Types.ObjectId, ref: 'Street' },
        investigator: { type: Schema.Types.ObjectId, ref: 'Investigator' },
        player: { type: Schema.Types.ObjectId, ref: 'Player' }
    }
);

playerInvestigatorSchema.methods.updateAmt = commonMethods.updateAmt;
playerInvestigatorSchema.methods.addToArray = commonMethods.addToArray;
playerInvestigatorSchema.methods.removeFromArray = commonMethods.removeFromArray;

playerInvestigatorSchema.methods.addFocusToken = function (tokenType) {
    this.focusTokens.push(tokenType);
    return this.save();
}

playerInvestigatorSchema.methods.removeFocusToken = function (tokenType) {
    const index = this.focusTokens.indexOf(tokenType);
    this.focusTokens.splice(index, 1);
    return this.save();
}

playerInvestigatorSchema.methods.updateSchemaObject = commonMethods.updateSchemaObject;

module.exports = mongoose.model('PlayerInvestigator', playerInvestigatorSchema);