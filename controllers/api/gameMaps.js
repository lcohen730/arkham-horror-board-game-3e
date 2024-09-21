const GameMap = require('../../models/gameMap');
const Location = require('../../models/location');

module.exports = {
    create,
    show,
    updateUnstable
};

// CREATE

// at beginning of game based on scenario
async function create(req, res) {
    try {
        const gameMap = await GameMap.create(req.body);
        res.status(201).json(gameMap);
        next();
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

/* async function index(req, res) {
    try {
        const gameMap = await GameMap.find({});
        res.status(200).json(gameMap);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
} */

async function show(req, res) {
    try {
        const gameMap = await GameMap.findById(req.params.id);
        if (!gameMap) {
            return res.status(404).json({ message: 'Game map not found' });
        }
        res.json(gameMap);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// UPDATE

// unstable space
async function updateUnstable(req, res) {
    try {
        const gameMap = await GameMap.findById(req.params.id);
        const location = await Location.findById(req.body.location);
        await gameMap.updateUnstableSpace('unstableSpace', location);
        res.status(200).json(gameMap);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// adding neigborhoods