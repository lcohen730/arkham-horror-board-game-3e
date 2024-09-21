const Street = require('../../models/street');

module.exports = {
    create,
    index,
    show,
    addInvestigator,
    removeInvestigator,
    addMonster,
    removeMonster
};

// CREATE
// at beginning of game?
async function create(req, res) {
    try {
        const street = await Street.create(req.body);
        res.status(201).json(street);
        next();
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function index(req, res) {
    try {
        const streets = await Street.find({});
        res.status(200).json(streets);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// show by type?

async function show(req, res) {
    try {
        const street = await Street.findById(req.params.id);
        res.status(200).json(street);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// UPDATE

// investigators
async function addInvestigator(req, res) {
    try {
        const street = await Street.findById(req.params.id);
        street.addToArray('investigators', req.body.investigator);
        res.status(200).json(street);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function removeInvestigator(req, res) {
    try {
        const street = await Street.findById(req.params.id);
        street.removeFromArray('investigators', req.body.investigator);
        res.status(200).json(street);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// monsters
async function addMonster(req, res) {
    try {
        const street = await Street.findById(req.params.id);
        street.addToArray('monsters', req.body.monster);
        res.status(200).json(street);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function removeMonster(req, res) {
    try {
        const street = await Street.findById(req.params.id);
        street.removeFromArray('monsters', req.body.monster);
        res.status(200).json(street);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}