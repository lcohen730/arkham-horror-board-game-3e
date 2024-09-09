const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const investigatorSchema = new Schema({
    name: { type: String, required: true },
    focusLimit: { type: Number, required: true },
    health: { type: Number, required: true },
    sanity: { type: Number, required: true },
    lore: { type: Number, required: true },
    influence: { type: Number, required: true },
    observation: { type: Number, required: true },
    strength: { type: Number, required: true },
    will: { type: Number, required: true },
    primaryRole: { type: String, required: true },
    secondaryRole: String,
    startingMoney: { type: Number, required: true },
    startingItemStatic: { type: String, required: true },
    startingItemChoices: { type: Array, required: true }
});

module.exports = mongoose.model('Investigator', investigatorSchema);