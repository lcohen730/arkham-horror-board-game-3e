const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commonMethods = require('./commonMethods');

const gameMapSchema = new Schema({
    neighborhoods: [{ type: Schema.Types.ObjectId, ref: 'Neighborhood' }],
    scenicStreets: { type: Number, required: true },
    residentialStreets: { type: Number, required: true },
    bridges: { type: Number, required: true },
    unstableSpace: { type: Schema.Types.ObjectId, ref: 'Location' }
});

gameMapSchema.methods.updateUnstableSpace = commonMethods.updateSchemaObject;

module.exports = mongoose.model('GameMap', gameMapSchema);