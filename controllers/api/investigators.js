const Investigator = require('../../models/investigator');

module.exports = {
    index,
    show
};

async function index(req, res) {
    try {
        const investigators = await Investigator.find({});
        if (!investigators) {
            return res.status(404).json({ msg: 'No investigators found' });
        }
        res.json(investigators);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function show(req, res) {
    try {
        const investigator = await Investigator.findById(req.params.id);
        res.status(200).json(investigator);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}