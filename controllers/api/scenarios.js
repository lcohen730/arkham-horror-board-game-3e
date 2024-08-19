const Scenario = require('../../models/scenario');

module.exports = {
    index,
    show
};

async function index(req, res) {
    try {
        const scenarios = await Scenario.find({});
        res.status(200).json(scenarios);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function show(req, res) {
    try {
        const scenario = await Scenario.findById(req.params.id);
        res.status(200).json(scenario);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}