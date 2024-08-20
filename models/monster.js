const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const monsterSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    movement: { type: Number, required: true },
    remnant: { type: Boolean, default: false, required: true },
    health: { type: Number, required: true },
    attackMod: { type: Number, required: true },
    evadeMod: { type: Number, required: true },
    healthDmg: { type: Number, required: true },
    sanityDmg: { type: Number, required: true }
});

module.exports = mongoose.model('Monster', monsterSchema);