const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const allySchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    health: { type: Number, required: true },
    sanity: { type: Number, required: true },
    test: { type: Number, required: true }
});

module.exports = mongoose.model('Ally', allySchema);