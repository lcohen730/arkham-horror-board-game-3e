const Event = require('../../models/event');

module.exports = {
	index,
	show,
	showByScenario
};

async function index(req, res) {
	try {
		const events = await Event.find({});
		res.status(200).json(events);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

async function show(req, res) {
	try {
		const event = await Event.findById(req.params.id);
		res.status(200).json(event);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

async function showByScenario(req, res) {
	try {
		const events = await Event.find({ scenario: req.params.id });
		res.status(200).json(events);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}
