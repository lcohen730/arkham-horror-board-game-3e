const Monster = require('../../models/monster');

module.exports = {
    index,
    show
};

async function index(req, res) {
    try {
        const monsters = await Monster.find({});
        res.status(200).json(monsters);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function show(req, res) {
    try {
        const monster = await Monster.findById(req.params.id);
        res.status(200).json(monster);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}