const { getGameMonster } = require('../src/utilities/game-monsters-api');
/* const {
	getPlayerInvestigator
} = require('../src/utilities/player-investigators-api'); */

const abilities = {
	// investigator abilities
	'boost attack': (target, amt) => {
		const originalStrength = target.strength;

		target.strength += amt;

		// Attack is performed

		target.strength = originalStrength;
	},
	'boost evade': (target, amt) => {
		const originalObservation = target.observation;

		target.observation += amt;

		// Evade is performed

		target.observation = originalObservation;
	},
	'boost research': (target, amt) => {
		const originalObservation = target.observation;

		target.observation += amt;

		// Research is performed

		target.observation = originalObservation;
	},
	'boost ward': (target, amt) => {
		const originalLore = target.lore;

		target.lore += amt;

		// Ward is performed

		target.lore = originalLore;
	},
	'boost cast': (target, amt) => {
		const originalLore = target.lore;

		target.lore += amt;

		// Cast is performed

		target.lore = originalLore;
	},
	'heal sanity': (target, amt) => {
		target.sanity += amt;
	},
	// monster abilities
	'move towards investigator': (gameMonsterId) => {
		// monster moves towards target investigator
		const monster = getGameMonster(gameMonsterId);
		let monsterLocation;
		if (monster.location) {
			monsterLocation = monster.location;
		} else {
			monsterLocation = monster.street;
		}
		// find out which investigator to target
		// move monster to investigator using monster's speed (movement)
	},
	'move towards location': (gameMonsterId) => {
		// monster moves towards target location
		const monster = getGameMonster(gameMonsterId);
		let monsterLocation;
		if (monster.location) {
			monsterLocation = monster.location;
		} else {
			monsterLocation = monster.street;
		}
		// move monster to location using monster's speed (movement)
	},
	'place doom': (gameMonsterId, amt) => {
		// place doom on monster's location
		const monster = getGameMonster(gameMonsterId);
		if (monster.location) {
			monster.location.doom += amt;
		} else {
			// a location next to the street gets doom equal to amt
		}
	}
};

module.exports = abilities;
