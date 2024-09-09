const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commonMethods = require('./commonMethods');

const gameScenarioSchema = new Schema({
    mythosCup: { type: Array, required: true },
    doom: { type: Number, required: true },
    clues: { type: Number, required: true },
    scenario: { type: Schema.Types.ObjectId, ref: 'Scenario' }
});

gameScenarioSchema.methods.removeFromMythosCup = function (tokenName) {
    const index = this.mythosCup.indexOf(tokenName);
    this.mythosCup.splice(index, 1);
    return this.save();
}

gameScenarioSchema.methods.addToMythosCup = function (tokenName) {
    this.mythosCup.push(tokenName);
    return this.save();
}

gameScenarioSchema.methods.updateAmt = commonMethods.updateAmt;

module.exports = mongoose.model('GameScenario', gameScenarioSchema);