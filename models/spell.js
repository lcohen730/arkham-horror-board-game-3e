const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spellSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    buyCost: { type: Number, required: true },
    hands: { type: Number, default: 0, required: true },
    castCost: { type: Number, required: true }
});

module.exports = mongoose.model('Spell', spellSchema);