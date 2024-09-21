const PlayerAlly = require('../../models/playerAlly');

module.exports = {
    create,
    index,
    show,
    showByInvestigator,
    updateHealth,
    updateSanity,
    deleteAlly
};

// CREATE

// when a player acquires an ally
async function create(req, res) {
    try {
        const playerAlly = await PlayerAlly.create(req.body);
        if (!playerAlly) {
            res.status(404).json({ msg: 'Player ally not created' });
        }
        res.json(playerAlly);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// READ

async function index(req, res) {
    try {
        const playerAllies = await PlayerAlly.find({});
        res.status(200).json(playerAllies);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function show(req, res) {
    try {
        const playerAlly = await PlayerAlly.findById(req.params.id);
        res.status(200).json(playerAlly);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function showByInvestigator(req, res) {
    try {
        const playerAllies = await PlayerAlly.find({ playerInvestigator: req.params.id });
        res.status(200).json(playerAllies);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// UPDATE

// health
async function updateHealth(req, res) {
    try {
        const playerAlly = await PlayerAlly.findById(req.params.id);
        await playerAlly.updateAmt('health', req.body.health);
        res.status(200).json(playerAlly);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// sanity
async function updateSanity(req, res) {
    try {
        const playerAlly = await PlayerAlly.findById(req.params.id);
        await playerAlly.updateAmt('sanity', req.body.sanity);
        res.status(200).json(playerAlly);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// DELETE

// when a player loses an ally
async function deleteAlly(req, res) {
    try {
        await PlayerAlly.findByIdAndDelete(req.params.id);
        res.status(204).json({ msg: 'Player ally deleted' });
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}