const Game = require('../../models/game');
const Investigator = require('../../models/playerInvestigator');

module.exports = {
    create,
    addInvestigator,
    removeInvestigator
};

async function create(req, res) {
    try {
        const game = await Game.create(req.body);
        res.status(201).json(game);
        next();
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// UPDATE

// investigators

// add an investigator to the game
async function addInvestigator(req, res) {
    try {
        const game = await Game.findById(req.params.id);
        const investigator = await Investigator.findById(req.body.investigator);
        await game.addToArray('investigators', investigator);
        res.status(200).json(game);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// remove an investigator from the game
async function removeInvestigator(req, res) {
    try {
        const game = await Game.findById(req.params.id);
        const investigator = await Investigator.findById(req.body.investigator);
        await game.removeFromArray('investigators', investigator);
        res.status(200).json(game);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// archive?
// headlines?