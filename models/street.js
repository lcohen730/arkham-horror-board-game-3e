const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commonMethods = require('./commonMethods');

const streetSchema = new Schema({
    type: { type: String, required: true },
    investigators: [{ type: Schema.Types.ObjectId, ref: 'PlayerInvestigator' }],
    monsters: [{ type: Schema.Types.ObjectId, ref: 'GameMonster' }],
    adjacentLocations: [{ type: Schema.Types.ObjectId, ref: 'Location' }],
});

streetSchema.methods.addToArray = commonMethods.addToArray;
streetSchema.methods.removeFromArray = commonMethods.removeFromArray;

module.exports = mongoose.model('Street', streetSchema);