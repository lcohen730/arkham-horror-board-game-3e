const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const commonMethods = require('./commonMethods');

const eventSchema = new Schema({
	scenario: { type: Schema.Types.ObjectId, ref: 'Scenario' },
	neighborhood: { type: Schema.Types.ObjectId, ref: 'Neighborhood' },
	doomLocation: { type: Schema.Types.ObjectId, ref: 'Location' },
	doomAmt: { type: Number, required: true, default: 1 },
	img: String
});

module.exports = mongoose.model('Event', eventSchema);
