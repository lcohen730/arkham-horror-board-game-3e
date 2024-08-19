const Map = require('../../models/map');

module.exports = {
    index,
    show
};

async function index(req, res) {
    try {
        const maps = await Map.find({});
        res.status(200).json(maps);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function show(req, res) {
    try {
        const map = await Map.findById(req.params.id);
        res.status(200).json(map);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}