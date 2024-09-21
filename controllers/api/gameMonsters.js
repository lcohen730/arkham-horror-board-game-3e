const GameMonster = require('../../models/gameMonster');

module.exports = {
    create,
    index,
    show,
    updateMonsterHealth,
    updateMonsterLocation
};

// CREATE
// at beginning of game based on scenario
async function create(req, res) {
    try {
        let gameMonster = (await GameMonster.create(req.body));
        gameMonster = await GameMonster
            .findById(gameMonster._id)
            .populate('monster')
            .exec()
        ;
        res.status(201).json(gameMonster);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function index(req, res) {
    try {
        const gameMonsters = await GameMonster
            .find({})
            .populate('monster')
            .exec()
        ;
        res.status(200).json(gameMonsters);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function show(req, res) {
    try {
        const gameMonster = await GameMonster
            .findById(req.params.id)
            .populate('monster')
            .exec()
        ;
        res.status(200).json(gameMonster);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// UPDATE

// health
async function updateMonsterHealth(req, res) {
    try {
        const gameMonster = await GameMonster
            .findById(req.params.id)
            .populate('monster')
            .exec()
        ;
        await gameMonster.updateHealth(req.body.health);
        res.status(200).json(gameMonster);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// location/street
async function updateMonsterLocation(req, res) {
    try {
        let gameMonster = await GameMonster.findById(req.params.id);
        await gameMonster.updateSchemaObject('location', req.body.location);
        gameMonster = await GameMonster
            .findById(req.params.id)
            .populate('monster')
            .populate('location')
            .exec()
        ;
        res.status(200).json(gameMonster);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// target location

// target investigator

// target doom

// target sanity loss