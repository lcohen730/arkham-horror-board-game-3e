const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    investigators: [{ type: Schema.Types.ObjectId, ref: 'PlayerInvestigator' }],
});

module.exports = mongoose.model('Player', playerSchema);