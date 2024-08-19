const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    cost: { type: Number, required: true },
    hands: { type: Number, default: 0, required: true },
    health: Number,
    sanity: Number
});

module.exports = mongoose.model('Item', itemSchema);