const Neighborhood = require('../../models/neighborhood');
const Investigator = require('../../models/playerInvestigator');
const Monster = require('../../models/gameMonster');

module.exports = {
    create,
    index,
    show,
    updateClues,
    addInvestigatorToNeighborhood,
    removeInvestigatorFromNeighborhood,
    addMonsterToNeighborhood,
    removeMonsterFromNeighborhood,
    updateDoom,
    toggleAnomalyStatus
};

// CREATE
// at beginning of game?
// when adding to the map?
async function create(req, res) {
    try {
        const neighborhood = await Neighborhood.create(req.body);
        if (!neighborhood) {
            return res.status(401).json({ msg: 'Could not create neighborhood' });
        }
        res.json(neighborhood);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function index(req, res) {
    try {
        const neighborhood = await Neighborhood.find({});
        res.status(200).json(neighborhood);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function show(req, res) {
    try {
        const neighborhood = await Neighborhood.findById(req.params.id);
        res.status(200).json(neighborhood);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// UPDATE

// number of clues
async function updateClues(req, res) {
    try {
        const neighborhood = await Neighborhood.findById(req.params.id);
        neighborhood.updateAmt('clues', req.body.clues);
        res.status(200).json(neighborhood);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// investigators
async function addInvestigatorToNeighborhood(req, res) {
    try {
        const neighborhood = await Neighborhood.findById(req.params.id);
        const investigator = await Investigator.findById(req.body.investigator);
        neighborhood.addToArray('investigators', investigator);
        res.status(200).json(neighborhood);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function removeInvestigatorFromNeighborhood(req, res) {
    try {
        const neighborhood = await Neighborhood.findById(req.params.id);
        const investigator = await Investigator.findById(req.body.investigator);
        neighborhood.removeFromArray('investigators', investigator);
        res.status(200).json(neighborhood);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// monsters
async function addMonsterToNeighborhood(req, res) {
    try {
        const neighborhood = await Neighborhood.findById(req.params.id);
        const monster = await Monster.findById(req.body.monster);
        neighborhood.addToArray('monsters', monster);
        res.status(200).json(neighborhood);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function removeMonsterFromNeighborhood(req, res) {
    try {
        const neighborhood = await Neighborhood.findById(req.params.id);
        const monster = await Monster.findById(req.body.monster);
        neighborhood.removeFromArray('monsters', monster);
        res.status(200).json(neighborhood);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// amt of doom
async function updateDoom(req, res) {
    try {
        const neighborhood = await Neighborhood.findById(req.params.id);
        neighborhood.updateAmt('doom', req.body.doom);
        res.status(200).json(neighborhood);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// anomaly true or false
async function toggleAnomalyStatus(req, res) {
    try {
        const neighborhood = await Neighborhood.findById(req.params.id);
        neighborhood.toggleAnomaly();
        res.status(200).json(neighborhood);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// DELETE
// in that one scenario