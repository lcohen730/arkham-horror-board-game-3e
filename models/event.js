const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const commonMethods = require('./commonMethods');

const eventSchema = new Schema({
	scenario: { type: Schema.Types.ObjectId, ref: 'Scenario' },
	neighborhood: { type: Schema.Types.ObjectId, ref: 'Neighborhood' },
	doomLocations: [{ type: Schema.Types.ObjectId, ref: 'Location' }],
	doomAmts: [{ type: Number, required: true }],
	img: String
});

module.exports = mongoose.model('Event', eventSchema);
