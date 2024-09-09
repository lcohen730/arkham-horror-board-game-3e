const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commonMethods = require('./commonMethods');

const playerItemSchema = new Schema(
    {
        health: { type: Number, required: true, default: 1 },
        sanity: { type: Number, required: true, default: 1 },
        item: { type: Schema.Types.ObjectId, ref: 'Item' },
        playerInvestigator: { type: Schema.Types.ObjectId, ref: 'PlayerInvestigator' }
    }
);

playerItemSchema.methods.updateAmt = commonMethods.updateAmt;

module.exports = mongoose.model('PlayerItem', playerItemSchema);