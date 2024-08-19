const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mapSchema = new Schema({
    scenario: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Scenario', 
        required: true 
    },
    neighborhoods: { type: Array, required: true },
    scenicStreets: { type: Number, required: true },
    residentialStreets: { type: Number, required: true },
    bridges: { type: Number, required: true }
});

module.exports = mongoose.model('Map', mapSchema);