const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/* const investigator = require('./investigator');
const item = require('./item');
const ally = require('./ally');
const gameMonster = require('./gameMonster');
const location = require('./location');
const street = require('./street');
const player = require('./player'); */

const playerAllySchema = new Schema(
    {
        health: { type: Number, required: true },
        sanity: { type: Number, required: true },
        ally: { type: Schema.Types.ObjectId, ref: 'Ally' },
        playerInvestigator: { type: Schema.Types.ObjectId, ref: 'PlayerInvestigator' }
    }
);

const playerItemSchema = new Schema(
    {
        health: { type: Number, required: true, default: 1 },
        sanity: { type: Number, required: true, default: 1 },
        item: { type: Schema.Types.ObjectId, ref: 'Item' },
        playerInvestigator: { type: Schema.Types.ObjectId, ref: 'PlayerInvestigator' }
    }
);

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
        items: [playerItemSchema],
        spells: { type: Array, required: true },
        allies: [playerAllySchema],
        conditions: { type: Array, required: true },
        location: { type: Schema.Types.ObjectId, ref: 'Location' },
        street: { type: Schema.Types.ObjectId, ref: 'Street' },
        investigator: { type: Schema.Types.ObjectId, ref: 'Investigator' },
        player: { type: Schema.Types.ObjectId, ref: 'Player' }
    }
);

module.exports = mongoose.model('PlayerInvestigator', playerInvestigatorSchema);