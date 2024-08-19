const Spell = require('../../models/spell');

module.exports = {
    index,
    show
};

async function index(req, res) {
    try {
        const spells = await Spell.find({});
        res.status(200).json(spells);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function show(req, res) {
    try {
        const spell = await Spell.findById(req.params.id);
        res.status(200).json(spell);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}