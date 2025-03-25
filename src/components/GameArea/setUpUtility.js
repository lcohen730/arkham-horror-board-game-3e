import * as gamesAPI from '../../utilities/games-api';
import * as gameScenariosAPI from '../../utilities/game-scenarios-api';
import * as playerInvestigatorsAPI from '../../utilities/player-investigator-api';
import * as itemsAPI from '../../utilities/items-api';
import * as gameMonstersAPI from '../../utilities/game-monsters-api';
import * as locationsAPI from '../../utilities/locations-api';
import * as eventsAPI from '../../utilities/events-api';
import * as gameMapsAPI from '../../utilities/game-maps-api';
import * as investigatorsAPI from '../../utilities/investigators-api';
import * as playersAPI from '../../utilities/players-api';
import * as scenariosAPI from '../../utilities/scenarios-api';
import { useState } from 'react';

// maybe add some state for the player and playerInvestigators so that we can use them in the game
const [players, setPlayers] = useState([]);
const [playerInvestigators, setPlayerInvestigators] = useState([]);

/* ---------------- SET-UP AND UTILITY FUNCTIONS ---------------- */

async function createNewPlayer() {
	const playerData = {
		investigators: [],
	};

	try {
		const player = await playersAPI.createPlayer(playerData);
		setPlayers([...players, player]);
		return player._id;
	} catch (error) {
		console.error('Error creating player:', error);
	}
}

async function createNewPlayerInvestigator(investigatorId) {
	const player = await createNewPlayer();
	const investigator = await investigatorsAPI.getInvestigator(investigatorId);
	
	const playerInvestigatorData = {
        focusLimit: investigator.focusLimit,
        health: investigator.health,
		sanity: investigator.sanity,
        lore: investigator.lore,
		influence: investigator.influence,
		observation: investigator.observation,
		strength: investigator.strength,
		will: investigator.will,
        money: investigator.startingMoney,
        focusTokens: [],
		engageMonsters: [],
		items: [],
        spells: [],
		allies: [],
        conditions: [],
        investigator: investigator._id,
        player: player
	}
	
	try {
		const playerInvestigator = await playerInvestigatorsAPI.createPlayerInvestigator(playerInvestigatorData);
		setPlayerInvestigators([...playerInvestigators, playerInvestigator]);
		await playersAPI.addInvestigator(player, playerInvestigator._id);
		return playerInvestigator._id;
	} catch (error) {
		console.error('Error creating playerInvestigator:', error);
	}
}

// create new gameScenario? then use it to create a new game instead of passing in the scenarioId

async function createNewGame(/* playerInvestigatorIds,  */scenarioId) {
	const scenario = await scenariosAPI.getScenario(scenarioId);
	
	const gameData = {
		// maybe investigators should be players instead - change model and then change this
		investigators: playerInvestigators,
		scenario: gameScenarioId,
		codex: gameScenario.scenario.startingCodex,
		headlines: [],
		store: []
	};

	try {
		const game = await gamesAPI.createGame(gameData);
		return game._id;
	} catch (error) {
		console.error('Error creating game:', error);
	}
}

async function addItemToStore(gameId, item) {
	await gamesAPI.addItemToStore(gameId, { item: '45-thompson' });
}

async function createInitialStore(gameId, setStore) {
	const items = await itemsAPI.getAllItems();
	const storeItems = [];

	for (let i = 0; i < 5; i++) {
		const item = items[Math.floor(Math.random() * items.length)]._id;
		await gamesAPI.addItemToStore(gameId, { item });
        storeItems.push(item);
	}
}

async function getStore(gameId) {
	const game = await gamesAPI.getGame(gameId);
	store = game.store;
}

// Fisher-Yates Sorting Algorithm from https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
function shuffleDeck(deck) {
	for (let i = deck.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * i + 1);
		[deck[i], (deck[j] = deck[j]), deck[i]];
	}

	return deck;
}

async function createEventDeck(gameScenarioId, setEventDeck) {
	const events = await eventsAPI.getEventsByScenario(gameScenarioId);
	const shuffledEvents = shuffleDeck(events);
	setEventDeck(shuffledEvents);
}

async function createMonsterDeck(gameScenarioId, setMonsterDeck) {
	const scenario = await gameScenariosAPI.getGameScenario(gameScenarioId);
	
	const monsters = [];

	for (let monsterId of scenario.monsterDeck) {
		const monster = await gameMonstersAPI.createGameMonster(monsterId);
		monsters.push(monster);
	}

	const shuffledMonsters = shuffleDeck(monsters);
	setMonsterDeck(shuffledMonsters);
}

function createHeadlineDeck(setHeadlineDeck) {
	const entireHeadlineDeck = [];

	// create entire headline deck of 32 cards
	for (let i = 1; i <= 32; i++) {
		entireHeadlineDeck.push(i);
	}

	// shuffle the entire headline deck
	const shuffledHeadlineDeck = shuffleDeck(entireHeadlineDeck);

	// take the first 13 cards from the shuffled deck
	const headlineDeck = shuffledHeadlineDeck.slice(0, 13);
	setHeadlineDeck(headlineDeck);
}

async function spreadDoom(eventDeck, setEventDeck, eventDeckDiscard, setEventDeckDiscard) {
	// grab the last event in the event deck
	const event = eventDeck[eventDeck.length - 1];
	// grab the doom locations and doom amounts from the event
	const doomLocations = event.doomLocations;
	// grab the doom amounts from the event
	const doomAmts = event.doomAmts;

	// for each doom location in doomLocations, add the doom amount corresponding to the matching index in doomAmts
	for (let i = 0; i < doomLocations.length; i++) {
		const location = await locationsAPI.getLocation(doomLocations[i]);
		await locationsAPI.updateDoomAmt(
			doomLocations[i],
			location.doom + doomAmts[i]
		);
		// check for anomaly trigger
		await checkLocationForAnomalyTrigger(doomLocations[i]);
	}

	// remove the event from the end of the event deck
	setEventDeck(eventDeck.slice(0, -1));

	// add the event to the event discard pile
	const eventDiscard = eventDeckDiscard;
	eventDiscard.push(event);
	setEventDeckDiscard(eventDiscard);
}

async function spawnMonster(monsterId) {
	const monster = await gameMonstersAPI.getGameMonster(monsterId);

	if (monster.monster.spawnStreet) {
		switch (monster.monster.spawnStreet) {
			case 'nearest leader':
				const investigators =
					await playerInvestigatorsAPI.getPlayerInvestigators();
				const leader = investigators.find(
					(investigator) => investigator.leader
				);

				if (leader.street) {
					// place monster on leader's street
					await gameMonstersAPI.updateMonsterStreet(monsterId, leader.street);

					// call engage function
					await engage(monsterId, leader._id);
				} else {
					// place monster on street nearest to leader's location
					// if there are multiple streets equidistant from leader's location,
					// player chooses which street to place monster on
				}

				break;
			default:
				break;
		}
	} else {
		switch (monster.monster.spawnLocation) {
			case 'most doom':
				// find the location with the most doom
				const locations = await locationsAPI.getLocations();

				const mostDoom = locations.reduce((acc, location) => {
					if (location.doom > acc.doom) {
						return location;
					}
					return acc;
				});

				// place monster on that location
				await gameMonstersAPI.updateMonsterLocation(monsterId, mostDoom._id);

				// if there are multiple investigators in the same space as the monster,
				// monster engages engageTarget
				// if there is only one investigator in the same space as the monster,
				// monster engages that investigator

				break;
			case 'unstable space':
				// find the unstable space
				const gameMap = await gameMapsAPI.getGameMap();
				const unstableSpace = gameMap.unstableSpace;

				// place monster on that location
				await gameMonstersAPI.updateMonsterLocation(monsterId, unstableSpace);

				// if there are multiple investigators in the same space as the monster,
				// monster engages engageTarget
				// if there is only one investigator in the same space as the monster,
				// monster engages that investigator

				break;
			default:
				break;
		}
	}
}

async function addDoomToScenario(gameScenarioId, doomAmt) {
	await gameScenariosAPI.updateDoom(gameScenarioId, doomAmt);
}

async function roll(playerInvestigatorId, diceNum) {
	const investigator =
		await playerInvestigatorsAPI.getPlayerInvestigator(playerInvestigatorId);

	let results = [];
	let numSuccesses;

	for (let i = 0; i < diceNum; i++) {
		const result = Math.floor(Math.random() * 6 + 1);
		results.push(result);
	}

	if (investigator.conditions.includes('blessed')) {
		// amount of results that are equal to 4 or above
		numSuccesses = results.filter((result) => result >= 4).length;
	} else if (investigator.conditions.includes('cursed')) {
		// amount of results that are equal to 6
		numSuccesses = results.filter((result) => result === 6).length;
	} else {
		// amount of results that are equal to 5 or above
		numSuccesses = results.filter((result) => result >= 5).length;
	}

	return numSuccesses;
}

async function engage(monsterId) {
	const monster = await gameMonstersAPI.getGameMonster(monsterId);

	const investigators = monster.location.investigators; // double check that this double population will work

	/* function findMost(property) {
            investigators.reduce((acc, investigator) => {
                if (investigator[property] > acc[property]) {
                    return investigator;
                }
            
                return acc;
            });
        } */

	// double check monster is not elusive
	if (!monster.monster.elusive) {
		if (investigators.length > 1) {
			// monster engages engageTarget
			switch (monster.monster.engageTarget) {
				case 'most spells':
					// find the investigator with the most spells
					const mostSpells = investigators.reduce((acc, investigator) => {
						if (investigator.spells.length > acc.spells.length) {
							return investigator;
						}
						return acc;
					});

					// engage that investigator
					await gameMonstersAPI.updateEngagedInvestigator(
						monsterId,
						mostSpells._id
					);
					await playerInvestigatorsAPI.engageMonster(mostSpells._id, monsterId);

					break;
				case 'most clues':
					// find the investigator with the most clues
					const mostClues = investigators.reduce((acc, investigator) => {
						if (investigator.clues > acc.clues) {
							return investigator;
						}
						return acc;
					});

					// engage that investigator
					await gameMonstersAPI.updateEngagedInvestigator(
						monsterId,
						mostClues._id
					);
					await playerInvestigatorsAPI.engageMonster(mostClues._id, monsterId);

					break;
				case 'most remnants':
					// find the investigator with the most remnants
					const mostRemnants = investigators.reduce((acc, investigator) => {
						if (investigator.remnants > acc.remnants) {
							return investigator;
						}

						return acc;
					});

					// engage that investigator
					await gameMonstersAPI.updateEngagedInvestigator(
						monsterId,
						mostRemnants._id
					);
					await playerInvestigatorsAPI.engageMonster(
						mostRemnants._id,
						monsterId
					);

					break;
				case 'lowest strength':
					// find the investigator with the lowest strength
					const lowestStrength = investigators.reduce((acc, investigator) => {
						if (investigator.strength < acc.strength) {
							return investigator;
						}

						return acc;
					});

					// engage that investigator
					await gameMonstersAPI.updateEngagedInvestigator(
						monsterId,
						lowestStrength._id
					);
					await playerInvestigatorsAPI.engageMonster(
						lowestStrength._id,
						monsterId
					);

					break;
				case 'highest lore':
					// find the investigator with the highest lore
					const highestLore = investigators.reduce((acc, investigator) => {
						if (investigator.lore > acc.lore) {
							return investigator;
						}

						return acc;
					});

					// engage that investigator
					await gameMonstersAPI.updateEngagedInvestigator(
						monsterId,
						highestLore._id
					);
					await playerInvestigatorsAPI.engageMonster(
						highestLore._id,
						monsterId
					);

					break;
				case 'highest influence':
					// find the investigator with the highest influence
					const highestInfluence = investigators.reduce((acc, investigator) => {
						if (investigator.influence > acc.influence) {
							return investigator;
						}

						return acc;
					});

					// engage that investigator
					await gameMonstersAPI.updateEngagedInvestigator(
						monsterId,
						highestInfluence._id
					);
					await playerInvestigatorsAPI.engageMonster(
						highestInfluence._id,
						monsterId
					);

					break;
				case 'lowest influence':
					// find the investigator with the lowest influence
					const lowestInfluence = investigators.reduce((acc, investigator) => {
						if (investigator.influence < acc.influence) {
							return investigator;
						}

						return acc;
					});

					// engage that investigator
					await gameMonstersAPI.updateEngagedInvestigator(
						monsterId,
						lowestInfluence._id
					);
					await playerInvestigatorsAPI.engageMonster(
						lowestInfluence._id,
						monsterId
					);

					break;
				case 'highest observation':
					// find the investigator with the highest observation
					const highestObservation = investigators.reduce(
						(acc, investigator) => {
							if (investigator.observation > acc.observation) {
								return investigator;
							}

							return acc;
						}
					);

					// engage that investigator
					await gameMonstersAPI.updateEngagedInvestigator(
						monsterId,
						highestObservation._id
					);
					await playerInvestigatorsAPI.engageMonster(
						highestObservation._id,
						monsterId
					);

					break;
				case 'lowest observation':
					// find the investigator with the lowest observation
					const lowestObservation = investigators.reduce(
						(acc, investigator) => {
							if (investigator.observation < acc.observation) {
								return investigator;
							}

							return acc;
						}
					);

					// engage that investigator
					await gameMonstersAPI.updateEngagedInvestigator(
						monsterId,
						lowestObservation._id
					);
					await playerInvestigatorsAPI.engageMonster(
						lowestObservation._id,
						monsterId
					);

					break;
				default:
					break;
			}
		} else {
			// monster engages the investigator in the same space
			await gameMonstersAPI.updateEngagedInvestigator(
				monsterId,
				investigators[0]._id
			);
			await playerInvestigatorsAPI.engageMonster(
				investigators[0]._id,
				monsterId
			);
		}
	}
}
