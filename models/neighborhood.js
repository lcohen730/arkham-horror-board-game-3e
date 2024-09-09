const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commonMethods = require('./commonMethods');

const neighborhoodSchema = new Schema({
    map: { type: Schema.Types.ObjectId, ref: 'GameMap' },
    name: { type: String, required: true },
    clues: { type: Number, required: true },
    investigators: [{ type: Schema.Types.ObjectId, ref: 'PlayerInvestigator' }],
    monsters: [{ type: Schema.Types.ObjectId, ref: 'GameMonster' }],
    doom: { type: Number, required: true },
    locations: [{ type: Schema.Types.ObjectId, ref: 'Location' }],
    anomaly: { type: Boolean, required: true }
});

neighborhoodSchema.methods.updateAmt = commonMethods.updateAmt;
neighborhoodSchema.methods.addToArray = commonMethods.addToArray;
neighborhoodSchema.methods.removeFromArray = commonMethods.removeFromArray;

neighborhoodSchema.methods.toggleAnomaly = function () {
    this.anomaly = !this.anomaly;
    return this.save();
}

module.exports = mongoose.model('Neighborhood', neighborhoodSchema);