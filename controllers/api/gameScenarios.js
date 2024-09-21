const GameScenario = require('../../models/gameScenario');

module.exports = {
    create,
    addTokenToMythosCup,
    removeTokenFromMythosCup,
    updateDoom,
    updateClues
};

async function create(req, res) {
    try {
        const game = await GameScenario.create(req.body);
        res.status(201).json(game);
        next();
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// UPDATE

// add token to mythos cup
async function addTokenToMythosCup(req, res) {
    try {
        const game = await GameScenario.findById(req.params.id);
        game.addToMythosCup(req.body.tokenName);
        res.status(200).json(game);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// remove token from mythos cup
async function removeTokenFromMythosCup(req, res) {
    try {
        const game = await GameScenario.findById(req.params.id);
        game.removeFromMythosCup(req.body.tokenName);
        res.status(200).json(game);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// update doom
async function updateDoom(req, res) {
    try {
        const game = await GameScenario.findById(req.params.id);
        game.updateAmt('doom', req.body.doom);
        res.status(200).json(game);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// update clues
async function updateClues(req, res) {
    try {
        const game = await GameScenario.findById(req.params.id);
        game.updateAmt('clues', req.body.clues);
        res.status(200).json(game);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}