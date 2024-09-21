const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commonMethods = require('./commonMethods');

const locationSchema = new Schema({
    neighborhood: { type: Schema.Types.ObjectId, ref: 'Neighborhood' },
    name: { type: String, required: true },
    doom: { type: Number, required: true },
    investigators: [{ type: Schema.Types.ObjectId, ref: 'PlayerInvestigator' }],
    monsters: [{ type: Schema.Types.ObjectId, ref: 'GameMonster' }],
    adjacentLocations: [{ type: Schema.Types.ObjectId, ref: 'Location'}],
    adjacentStreets: [{ type: Schema.Types.ObjectId, ref: 'Street' }]
});

locationSchema.methods.updateAmt = commonMethods.updateAmt;
locationSchema.methods.addToArray = commonMethods.addToArray;
locationSchema.methods.removeFromArray = commonMethods.removeFromArray;
locationSchema.methods.updateSchemaObject = commonMethods.updateSchemaObject;

module.exports = mongoose.model('Location', locationSchema);