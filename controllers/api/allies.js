const Ally = require('../../models/ally');

module.exports = {
    index,
    show
};

async function index(req, res) {
    try {
        const allies = await Ally.find({});
        res.status(200).json(allies);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function show(req, res) {
    try {
        const ally = await Ally.findById(req.params.id);
        res.status(200).json(ally);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}