const PlayerInvestigator = require('../../models/playerInvestigator');

module.exports = {
    create,
    index,
    show,
    updateFocusLimit,
    updateHealth,
    updateSanity,
    updateLore,
    updateInfluence,
    updateObservation,
    updateStrength,
    updateWill,
    updateMoneyAmt,
    addFocus,
    removeFocus,
    updateRemnants,
    updateClues,
    engageMonster,
    disengageMonster,
    addItem,
    removeItem,
    addSpell,
    removeSpell,
    addAlly,
    removeAlly,
    addCondition,
    updateLocation,
    updateStreet,
    deleteInvestigator
};

/* ------------------ CREATE ------------------ */
// at beginning of game or when your character dies
async function create(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.create(req.body);
        res.status(201).json(playerInvestigator);
        next();
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

/* ------------------ READ ------------------ */

async function index(req, res) {
    try {
        const playerInvestigators = await PlayerInvestigator.find({});
        if (!playerInvestigators) {
            throw new Error('No player investigators found');
        }
        res.status(200).json(playerInvestigators);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function show(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

/* ------------------ UPDATE ------------------ */

// focus limit
async function updateFocusLimit(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        playerInvestigator.updateAmt('focusLimit', req.body.focusLimit);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// health
async function updateHealth(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        playerInvestigator.updateAmt('health', req.body.health);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// sanity
async function updateSanity(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        playerInvestigator.updateAmt('sanity', req.body.sanity);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// lore
async function updateLore(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        playerInvestigator.updateAmt('lore', req.body.lore);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// influence
async function updateInfluence(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        playerInvestigator.updateAmt('influence', req.body.influence);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// observation
async function updateObservation(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        playerInvestigator.updateAmt('observation', req.body.observation);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// strength
async function updateStrength(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        playerInvestigator.updateAmt('strength', req.body.strength);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// will
async function updateWill(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        playerInvestigator.updateAmt('will', req.body.will);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// money
async function updateMoneyAmt(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        playerInvestigator.updateAmt('money', req.body.money);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// focus tokens
async function addFocus(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        playerInvestigator.addFocusToken(req.body.tokenType);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function removeFocus(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        playerInvestigator.removeFocusToken(req.body.tokenType);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// remnants
async function updateRemnants(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        playerInvestigator.updateAmt('remnants', req.body.remnants);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// clues
async function updateClues(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        playerInvestigator.updateAmt('clues', req.body.clues);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// engaged monsters
async function engageMonster(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        playerInvestigator.addToArray('engagedMonsters', req.body.monsterId);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// used for active disengagement and also for when a monster is defeated
async function disengageMonster(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        playerInvestigator.removeFromArray('engagedMonsters', req.body.monsterId);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// items
async function addItem(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        playerInvestigator.addToArray('items', req.body.itemId);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function removeItem(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        playerInvestigator.removeFromArray('items', req.body.itemId);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// spells
async function addSpell(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        playerInvestigator.addToArray('spells', req.body.spellId);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function removeSpell(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        playerInvestigator.removeFromArray('spells', req.body.spellId);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// allies
async function addAlly(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        playerInvestigator.addToArray('allies', req.body.allyId);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function removeAlly(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        playerInvestigator.removeFromArray('allies', req.body.allyId);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// conditions
async function addCondition(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        playerInvestigator.addToArray('conditions', req.body.condition);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// location
async function updateLocation(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        playerInvestigator.updateSchemaObject('location', req.body.locationId);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// street
async function updateStreet(req, res) {
    try {
        const playerInvestigator = await PlayerInvestigator.findById(req.params.id);
        playerInvestigator.updateSchemaObject('street', req.body.streetId);
        res.status(200).json(playerInvestigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}


/* ------------------ DELETE ------------------ */

// if your character dies
async function deleteInvestigator(req, res) {
    try {
        await PlayerInvestigator.findByIdAndDelete(req.params.id);
        res.status(204).json({ msg: 'Player investigator deleted' });
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}