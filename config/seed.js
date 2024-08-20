require('dotenv').config();
require('./database');

const Ally = require('../models/ally');
const Investigator = require('../models/investigator');
const Item = require('../models/item');
const Map = require('../models/map');
const Monster = require('../models/monster');
const Scenario = require('../models/scenario');
const Spell = require('../models/spell');

(async function() {
    await Ally.deleteMany({});
    await Investigator.deleteMany({});
    await Item.deleteMany({});
    await Map.deleteMany({});
    await Monster.deleteMany({});
    await Scenario.deleteMany({});
    await Spell.deleteMany({});

    const allies = await Ally.create([
        { name: 'Bob', type: 'Accountant', health: 10, sanity: 10 },
        { name: 'Alice', type: 'Librarian', health: 8, sanity: 12 },
        { name: 'Charlie', type: 'Doctor', health: 12, sanity: 8 }
    ]);

    const investigators = await Investigator.create([
        { 
            name:'Daisy Walker', 
            focusLimit: 5, 
            health: 5, 
            sanity: 7, 
            lore: 5, 
            influence: 3, 
            observation: 5, 
            strength: 2, 
            will: 3, 
            primaryRole: 'Researcher', 
            secondaryRole: 'Mystic', 
            startingMoney: 5, 
            startingItemStatic: 'Flashlight', 
            startingItemChoices: ['Knife', 'Pistol'] 
        },
        {
            name: 'Roland Banks',
            focusLimit: 3,
            health: 7,
            sanity: 5,
            lore: 2,
            influence: 3,
            observation: 5,
            strength: 3,
            will: 5,
            primaryRole: 'Detective',
            secondaryRole: 'Soldier',
            startingMoney: 3,
            startingItemStatic: 'Pistol',
            startingItemChoices: ['Knife', 'Flashlight']
        }
    ]);

    const items = await Item.create([
        { 
            name: 'Flashlight', 
            type: 'Common',
            cost: 2,
            hands: 1
        },
        {
            name: 'Knife',
            type: 'Common',
            cost: 1,
            hands: 1,
            health: 1
        },
        {
            name: 'Pistol',
            type: 'Common',
            cost: 3,
            hands: 2,
            health: 2
        }
    ]);

    /* const maps = await Map.create([
        { 
            scenario: {}, 
            neigborhoods: ['Downtown', 'Uptown', 'Eastside', 'Westside'], 
            scenicStreets: 4,
            residentialStreets: 4,
            bridges: 2
        },
        {
            scenario: {},
            neighborhoods: ['Downtown', 'Uptown', 'Eastside', 'Westside'],
            scenicStreets: 3,
            residentialStreets: 5,
            bridges: 1
        }
    ]); */

    const monsters = await Monster.create([
        { 
            name: 'Zombie', 
            type: 'Undead', 
            movement: 1,
            remnant: false,
            health: 2,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        },
        {
            name: 'Cultist',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }
    ]);

    const scenarios = await Scenario.create([
        { 
            name: 'The Haunting', 
            startingLocation: 'Miskatonic University',
            monsterDeck: ['Zombie', 'Cultist'],
            mythosCup: ['Clue', 'Doom', 'Burst', 'Monster', 'Blank'],
            staringCodex: [2, 3],
            anomalyDeck: 'They Fall Slowly',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Zombie', 'Cultist'],
            startingCreaturesLocations: ['Cave', 'Park']
        }
    ]);

    const spells = await Spell.create([
        { 
            name: 'Warding', 
            type: 'Mystic', 
            buyCost: 2,
            hands: 0,
            castCost: 1
        },
        {
            name: 'Heal', 
            type: 'Mystic', 
            buyCost: 3,
            hands: 0,
            castCost: 2
        }
    ]);

    console.log(allies, investigators, items, monsters, scenarios, spells);

    process.exit();
})();