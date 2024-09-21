const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/* const scenario = require('./scenario');
const neighborhood = require('./neighborhood'); */

const mapSchema = new Schema({
    scenario: { type: Schema.Types.ObjectId, ref: 'Scenario' },
    neighborhoods: { type: Array, required: true },
    scenicStreets: { type: Number, required: true },
    residentialStreets: { type: Number, required: true },
    bridges: { type: Number, required: true }
});

module.exports = mongoose.model('Map', mapSchema);