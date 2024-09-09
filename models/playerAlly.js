const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commonMethods = require('./commonMethods');

const playerAllySchema = new Schema(
    {
        health: { type: Number, required: true },
        sanity: { type: Number, required: true },
        ally: { type: Schema.Types.ObjectId, ref: 'Ally' },
        playerInvestigator: { type: Schema.Types.ObjectId, ref: 'PlayerInvestigator' }
    }
);

playerAllySchema.methods.updateAmt = commonMethods.updateAmt;

module.exports = mongoose.model('PlayerAlly', playerAllySchema);