const Location = require('../../models/location');

module.exports = {
    create,
    index,
    show,
    updateDoomAmt,
    addInvestigator,
    removeInvestigator,
    addMonster,
    removeMonster,
    updateNeighborhood
};

// CREATE
// at beginning of game?
async function create(req, res) {
    try {
        const location = await Location.create(req.body);
        res.status(201).json(location);
        next();
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function index(req, res) {
    try {
        const location = await Location.find({});
        if (!location) {
            res.status(404).json({ msg: 'No locations found' });
        }
        res.json(location);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// show by neighborhood

async function show(req, res) {
    try {
        const location = await Location.findById(req.params.id);
        res.status(200).json(location);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// UPDATE

// amt of doom
async function updateDoomAmt(req, res) {
    try {
        const location = await Location.findById(req.params.id);
        location.updateAmt('doom', req.body.doom);
        res.status(200).json(location);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// investigators
async function addInvestigator(req, res) {
    try {
        const location = await Location.findById(req.params.id);
        location.addToArray('investigators', req.body.investigator);
        res.status(200).json(location);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function removeInvestigator(req, res) {
    try {
        const location = await Location.findById(req.params.id);
        location.removeFromArray('investigators', req.body.investigator);
        res.status(200).json(location);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// monsters
async function addMonster(req, res) {
    try {
        const location = await Location.findById(req.params.id);
        location.addToArray('monsters', req.body.monster);
        const populatedLocation = await Location
            .findById(req.params.id)
            .populate({
                path: 'monsters',
                populate: { path: 'monster' }
            })
            .exec()
        ;
        res.status(200).json(populatedLocation);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function removeMonster(req, res) {
    try {
        const location = await Location.findById(req.params.id);
        location.removeFromArray('monsters', req.body.monster);
        const populatedLocation = await Location
            .findById(req.params.id)
            .populate({
                path: 'monsters',
                populate: { path: 'monster' }
            })
            .exec()
        ;
        res.status(200).json(populatedLocation);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function updateNeighborhood(req, res) {
    try {
        const location = await Location.findById(req.params.id);
        location.updateSchemaObject(req.body);
        res.status(200).json(location);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// for ones that the map changes:
    // adjacent locations
    // adjacent streets