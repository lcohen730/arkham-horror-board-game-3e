const Item = require('../../models/item');

module.exports = {
    index,
    show
};

async function index(req, res) {
    try {
        const items = await Item.find({});
        res.status(200).json(items);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function show(req, res) {
    try {
        const item = await Item.findById(req.params.id);
        res.status(200).json(item);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}