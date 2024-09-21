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
        { name: 'Alice Luxley', type: 'Police Detective', health: 3, sanity: 2 },
        { name: 'Gabriel Carillo', type: 'Teacher', health: 2, sanity: 1 },
        { name: 'Lewis Hayes', type: 'University Professor', health: 1, sanity: 4 }
    ]);

    const investigators = await Investigator.create([
        { 
            name:'"Ashcan" Pete', 
            focusLimit: 3, 
            health: 7, 
            sanity: 5, 
            lore: 3, 
            influence: 1, 
            observation: 3, 
            strength: 3, 
            will: 3, 
            primaryRole: 'survivor', 
            startingMoney: 1, 
            startingItemStatic: 'Duke', 
            startingItemChoices: ['Pete\'s Guitar', 'Dark Dreams'] 
        }, 
        { 
            name:'"Skids" O\'Toole', 
            focusLimit: 0, 
            health: 6, 
            sanity: 6, 
            lore: 2, 
            influence: 1, 
            observation: 3, 
            strength: 3, 
            will: 4, 
            primaryRole: 'rogue', 
            secondaryRole: 'survivor', 
            startingMoney: 2, 
            startingItemStatic: 'On the Lam', 
            startingItemChoices: ['Light Fingers', 'Switchblade'] 
        }, 
        { 
            name:'Agatha Crane', 
            focusLimit: 2, 
            health: 5, 
            sanity: 7, 
            lore: 4, 
            influence: 3, 
            observation: 3, 
            strength: 1, 
            will: 2, 
            primaryRole: 'seeker', 
            secondaryRole: 'mystic', 
            startingMoney: 2, 
            startingItemStatic: 'Occult Principle/Scientific Method', 
            startingItemChoices: ['Call the Dead', 'Spirit Camera'] 
        }, 
        { 
            name:'Agnes Baker', 
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
            name:'Calvin Wright', 
            focusLimit: 2, 
            health: 6, 
            sanity: 6, 
            lore: 3, 
            influence: 3, 
            observation: 3, 
            strength: 3, 
            will: 1, 
            primaryRole: 'guardian', 
            secondaryRole: 'rogue', 
            startingMoney: 3, 
            startingItemStatic: 'Spirit Dagger/Until the End of Time', 
            startingItemChoices: ['Voice of the Messenger', 'Dark Pact'] 
        }, 
        { 
            name:'Carson Sinclair', 
            focusLimit: 3, 
            health: 6, 
            sanity: 6, 
            lore: 2, 
            influence: 3, 
            observation: 3, 
            strength: 2, 
            will: 3, 
            primaryRole: 'seeker', 
            secondaryRole: 'survivor', 
            startingMoney: 2, 
            startingItemStatic: 'Anticipation', 
            startingItemChoices: ['As You Wish', 'Prepared for Anything'] 
        }, 
        { 
            name:'Charlie Kane', 
            focusLimit: 0, 
            health: 4, 
            sanity: 8, 
            lore: 2, 
            influence: 4, 
            observation: 3, 
            strength: 2, 
            will: 2, 
            primaryRole: 'rogue', 
            secondaryRole: 'seeker', 
            startingMoney: 2, 
            startingItemStatic: 'Voice of Authority', 
            startingItemChoices: ['Bonnie Walsh', 'Calling in Favors'] 
        }, 
        { 
            name:'Daniela Reyes', 
            focusLimit: 3, 
            health: 7, 
            sanity: 5, 
            lore: 3, 
            influence: 3, 
            observation: 1, 
            strength: 3, 
            will: 3, 
            primaryRole: 'rogue', 
            secondaryRole: 'survivor', 
            startingMoney: 3, 
            startingItemStatic: 'Gabriel', 
            startingItemChoices: ['Ace of Swords', 'Wrench'] 
        }, 
        { 
            name:'Dexter Drake', 
            focusLimit: 1, 
            health: 5, 
            sanity: 7, 
            lore: 4, 
            influence: 3, 
            observation: 2, 
            strength: 2, 
            will: 2, 
            primaryRole: 'mystic', 
            startingMoney: 2, 
            startingItemStatic: 'Mists of R\'lyeh', 
            startingItemChoices: ['Astral Travel', 'Magician\'s Cane'] 
        }, 
        { 
            name:'Diana Stanley', 
            focusLimit: 2, 
            health: 7, 
            sanity: 5, 
            lore: 4, 
            influence: 2, 
            observation: 3, 
            strength: 3, 
            will: 1, 
            primaryRole: 'mystic', 
            secondaryRole: 'guardian', 
            startingMoney: 2, 
            startingItemStatic: 'Dark Insight', 
            startingItemChoices: ['Call the Storm', 'Stolen Amulet'] 
        }, 
        { 
            name:'Father Mateo', 
            focusLimit: 3, 
            health: 5, 
            sanity: 7, 
            lore: 3, 
            influence: 3, 
            observation: 1, 
            strength: 2, 
            will: 4, 
            primaryRole: 'mystic', 
            secondaryRole: 'guardian', 
            startingMoney: 2, 
            startingItemStatic: 'Signum Crucis', 
            startingItemChoices: ['Hold Back the Darkness', 'Holy Water'] 
        }, 
        { 
            name:'Jenny Barnes', 
            focusLimit: 1, 
            health: 7, 
            sanity: 5, 
            lore: 1, 
            influence: 4, 
            observation: 2, 
            strength: 3, 
            will: 3, 
            primaryRole: 'rogue', 
            startingMoney: 5, 
            startingItemStatic: 'Search for Izzie', 
            startingItemChoices: ['Dressed to the Nines', 'Jenny\'s Twin .45s'] 
        }, 
        { 
            name:'Kate Winthrop', 
            focusLimit: 3, 
            health: 5, 
            sanity: 7, 
            lore: 3, 
            influence: 2, 
            observation: 4, 
            strength: 2, 
            will: 2, 
            primaryRole: 'seeker', 
            startingMoney: 2, 
            startingItemStatic: 'Research Notes', 
            startingItemChoices: ['Flux Stabilizer', 'Replicable Findings'] 
        }, 
        { 
            name:'Marie Lambeau', 
            focusLimit: 2, 
            health: 5, 
            sanity: 7, 
            lore: 3, 
            influence: 4, 
            observation: 2, 
            strength: 2, 
            will: 2, 
            primaryRole: 'mystic', 
            secondaryRole: 'survivor', 
            startingMoney: 4, 
            startingItemStatic: 'Intervene', 
            startingItemChoices: ['Witch Blood', 'Grandmère\'s Knife'] 
        }, 
        { 
            name:'Mark Harrigan', 
            focusLimit: 1, 
            health: 8, 
            sanity: 4, 
            lore: 1, 
            influence: 2, 
            observation: 2, 
            strength: 4, 
            will: 4, 
            primaryRole: 'guardian', 
            startingMoney: 2, 
            startingItemStatic: 'One Man Army', 
            startingItemChoices: ['Sophie\'s Portrait', 'War of Attrition'] 
        }, 
        { 
            name:'Michael McGlen', 
            focusLimit: 1, 
            health: 8, 
            sanity: 4, 
            lore: 2, 
            influence: 3, 
            observation: 1, 
            strength: 4, 
            will: 3, 
            primaryRole: 'rogue', 
            secondaryRole: 'guardian', 
            startingMoney: 3, 
            startingItemStatic: 'Chicago Typewriter', 
            startingItemChoices: ['O\'Bannion Member', 'Ol\' Boiler'] 
        }, 
        { 
            name:'Minh Thi Phan', 
            focusLimit: 2, 
            health: 6, 
            sanity: 6, 
            lore: 3, 
            influence: 3, 
            observation: 3, 
            strength: 2, 
            will: 2, 
            primaryRole: 'seeker', 
            secondaryRole: 'survivor', 
            startingMoney: 3, 
            startingItemStatic: 'King in Yellow', 
            startingItemChoices: ['Analytical Mind', 'Synergy'] 
        }, 
        { 
            name:'Norman Withers', 
            focusLimit: 2, 
            health: 5, 
            sanity: 7, 
            lore: 3, 
            influence: 1, 
            observation: 3, 
            strength: 2, 
            will: 4, 
            primaryRole: 'seeker', 
            secondaryRole: 'mystic', 
            startingMoney: 1, 
            startingItemStatic: 'Find Gate', 
            startingItemChoices: ['Astronomy Book', 'Precious Memento'] 
        }, 
        { 
            name:'Patrice Hathaway', 
            focusLimit: 3, 
            health: 5, 
            sanity: 7, 
            lore: 3, 
            influence: 2, 
            observation: 3, 
            strength: 1, 
            will: 4, 
            primaryRole: 'mystic', 
            secondaryRole: 'seeker', 
            startingMoney: 3, 
            startingItemStatic: 'Patrice\'s Violin/Captivating Melody', 
            startingItemChoices: ['Ominous Dreams'] 
        }, 
        { 
            name:'Preston Fairmont',  
            focusLimit: 3, 
            health: 7, 
            sanity: 5, 
            lore: 2, 
            influence: 5, 
            observation: 2, 
            strength: 3, 
            will: 1, 
            primaryRole: 'rogue', 
            secondaryRole: 'survivor', 
            startingMoney: 4, 
            startingItemStatic: 'Family Inheritance', 
            startingItemChoices: ['Money Talks', 'Life of Privilege'] 
        }, 
        { 
            name:'Rex Murphy', 
            focusLimit: 5, 
            health: 7, 
            sanity: 7, 
            lore: 3, 
            influence: 3, 
            observation: 3, 
            strength: 2, 
            will: 2, 
            primaryRole: 'seeker', 
            secondaryRole: 'rogue', 
            startingMoney: 3, 
            startingItemStatic: 'Search for the Truth/The Tower', 
            startingItemChoices: ['It All Comes Together', 'Overcome All Odds'] 
        }, 
        {
            name: 'Roland Banks',
            focusLimit: 2,
            health: 7,
            sanity: 5,
            lore: 2,
            influence: 2,
            observation: 3,
            strength: 3,
            will: 3,
            primaryRole: 'guardian',
            secondaryRole: 'seeker',
            startingMoney: 3,
            startingItemStatic: '.38 Special',
            startingItemChoices: ['Follow Up', 'Implacable']
        }, 
        { 
            name:'Silas Marsh', 
            focusLimit: 2, 
            health: 8, 
            sanity: 4, 
            lore: 1, 
            influence: 3, 
            observation: 3, 
            strength: 3, 
            will: 3, 
            primaryRole: 'survivor', 
            secondaryRole: 'rogue', 
            startingMoney: 3, 
            startingItemStatic: 'Fishing Net', 
            startingItemChoices: ['Adventurous Spirit', 'Flannel Shirt'] 
        }, 
        { 
            name:'Stella Clark', 
            focusLimit: 2, 
            health: 5, 
            sanity: 7, 
            lore: 3, 
            influence: 2, 
            observation: 3, 
            strength: 2, 
            will: 3, 
            primaryRole: 'survivor', 
            startingMoney: 3, 
            startingItemStatic: 'Delivery Truck', 
            startingItemChoices: ['Snow Nor Rain', 'Called by the Mists'] 
        }, 
        { 
            name:'Tommy Muldoon', 
            focusLimit: 2, 
            health: 7, 
            sanity: 5, 
            lore: 2, 
            influence: 2, 
            observation: 3, 
            strength: 3, 
            will: 3, 
            primaryRole: 'guardian', 
            secondaryRole: 'survivor', 
            startingMoney: 2, 
            startingItemStatic: 'Becky', 
            startingItemChoices: ['Handcuffs', 'Motorcycle'] 
        }, 
        { 
            name:'Wendy Adams', 
            focusLimit: 3, 
            health: 5, 
            sanity: 7, 
            lore: 3, 
            influence: 1, 
            observation: 4, 
            strength: 2, 
            will: 3, 
            primaryRole: 'survivor', 
            secondaryRole: 'seeker', 
            startingMoney: 1, 
            startingItemStatic: 'Mama\'s Amulet', 
            startingItemChoices: ['Mr. Pawterson', 'Mysterious Photo'] 
        }, 
        { 
            name:'Winifred Habbamock', 
            focusLimit: 3, 
            health: 6, 
            sanity: 6, 
            lore: 1, 
            influence: 2, 
            observation: 4, 
            strength: 2, 
            will: 4, 
            primaryRole: 'rogue', 
            startingMoney: 3, 
            startingItemStatic: '', 
            startingItemChoices: ['Anything You Can Do', 'Barnstormer', 'Reckless Resolve'] 
        }, 
        { 
            name:'Zoey Samaras', 
            focusLimit: 2, 
            health: 5, 
            sanity: 7, 
            lore: 3, 
            influence: 2, 
            observation: 1, 
            strength: 3, 
            will: 4, 
            primaryRole: 'guardian', 
            secondaryRole: 'mystic', 
            startingMoney: 3, 
            startingItemStatic: 'Chef\'s Knife', 
            startingItemChoices: ['Zoey\'s Cross', 'Enchant Weapon'] 
        }
    ]);

    const items = await Item.create([
        {
            name: '.38 Revolver',
            type: 'Common Weapon',
            cost: 3,
            hands: 1
        }, 
        {
            name: '.41 Derringer',
            type: 'Common Curio Weapon',
            cost: 2,
            hands: 1
        }, 
        { 
            name: '.45 Automatic', 
            type: 'Common Weapon',
            cost: 4,
            hands: 1
        }, 
        { 
            name: '.45 Thompson', 
            type: 'Common Weapon',
            cost: 5,
            hands: 2
        }, 
        {
            name: 'Baseball Bat', 
            type: 'Common', 
            cost: 2, 
            hands: 2 
        }, 
        { 
            name: 'Bulletproof Vest',  
            type: 'Common',
            cost: 4,
            hands: 0
        }, 
        {
            name: 'Camera',
            type: 'Common',
            cost: 4,
            hands: 2
        }, 
        { 
            name: 'Dynamite', 
            type: 'Common Weapon',
            cost: 5,
            hands: 0
        }, 
        { 
            name: 'Elder Sign Amulet', 
            type: 'Magical Curio',
            cost: 4,
            hands: 0
        }, 
        {
            name: 'Enchanted Knife',
            type: 'Magical Curio Weapon',
            cost: 2,
            hands: 1
        }, 
        {
            name: 'Encyclopedia', 
            type: 'Common Curio Tome', 
            cost: 3,
            hands: 0
        }, 
        { 
            name: 'Fine Clothes', 
            type: 'Common Curio',
            cost: 4,
            hands: 0
        }, 
        {
            name: 'First Aid Kit',
            type: 'Common',
            cost: 2,
            hands: 0
        }, 
        {
            name: 'Grimms\` Fairy Tales', 
            type: 'Common Curio Tome', 
            cost: 4, 
            hands: 0 
        }, 
        {
            name: 'Grotesque Statue', 
            type: 'Magical Curio', 
            cost: 4, 
            hands: 0 
        }, 
        {
            name: 'Ground Pepper',
            type: 'Common Curio',
            cost: 1,
            hands: 0 
        }, 
        {
            name: 'Healing Elixir',
            type: 'Magical Curio',
            cost: 3,
            hands: 0,
            health: 1, 
            sanity: 1 
        }, 
        {
            name: 'Knife',
            type: 'Common Curio Weapon',
            cost: 1,
            hands: 1 
        }, 
        {
            name: 'Leather Coat',
            type: 'Common Curio',
            cost: 3,
            hands: 0,
            health: 3
        }, 
        {
            name: 'Liquid Courage', 
            type: 'Common', 
            cost: 1, 
            hands: 0, 
            sanity: 2 
        }, 
        {
            name: 'Lucky Charm', 
            type: 'Curio', 
            cost: 2, 
            hands: 0 
        }, 
        {
            name: 'Lucky Cigarette Case',
            type: 'Common Curio',
            cost: 5,
            hands: 0 
        }, 
        {
            name: 'Magnifying Glass',
            type: 'Common Curio',
            cost: 1,
            hands: 1
        }, 
        {
            name: 'Map of Arkham', 
            type: 'Common Curio',
            cost: 2,
            hands: 0
        }, 
        {
            name: 'Mystic Scroll', 
            type: 'Curio Tome', 
            cost: 3, 
            hands: 0 
        }, 
        { 
            name: 'Mystic Tome', 
            type: 'Curio Tome',
            cost: 4,
            hands: 0
        }, 
        {
            name: 'Occult Scripture', 
            type: 'Curio Tome', 
            cost: 3, 
            hands: 1 
        }, 
        {
            name: 'Otherworld Codex', 
            type: 'Curio Tome', 
            cost: 5, 
            hands: 2 
        }, 
        {
            name: 'Pain Killers',
            type: 'Common',
            cost: 1,
            hands: 0, 
            health: 2
        }, 
        {
            name: 'Pallid Mask', 
            type: 'Magical Curio', 
            cost: 4, 
            hands: 0 
        }, 
        {
            name: 'Pocket Watch',
            type: 'Common Curio',
            cost: 6,
            hands: 0,
        }, 
        { 
            name: 'Rabbit\'s Foot', 
            type: 'Common Curio',
            cost: 2,
            hands: 0
        }, 
        {
            name: 'Secret Page',
            type: 'Curio Tome',
            cost: 3,
            hands: 1
        }, 
        { 
            name: 'Shotgun', 
            type: 'Common Weapon',
            cost: 6,
            hands: 2
        }, 
        {
            name: 'Silver Key',
            type: 'Magical Curio',
            cost: 6,
            hands: 0
        }, 
        {
            name: 'Tattered Cloak',
            type: 'Magical Curio',
            cost: 5,
            hands: 0 
        }, 
        {
            name: 'Token of Faith',
            type: 'Common Curio',
            cost: 3,
            hands: 0,
            sanity: 3
        }, 
        {
            name: 'True Magick',
            type: 'Curio Tome',
            cost: 6,
            hands: 1 
        }, 
        {
            name: 'Warding Stone',
            type: 'Curio',
            cost: 2,
            hands: 1,
            sanity: 2
        }
    ]);

    const scenarios = await Scenario.create([
        { 
            name: 'Approach of Azathoth', 
            startingLocation: 'Miskatonic University',
            monsterDeck: ['Zombie', 'Cultist'],
            mythosCup: ['Clue', 'Doom', 'Burst', 'Monster', 'Blank'],
            staringCodex: [2, 3],
            anomalyDeck: 'They Fall Slowly',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Zombie', 'Cultist'],
            startingCreaturesLocations: ['Cave', 'Park']
        }, 
        { 
            name: 'Feast of Umôrdhoth', 
            startingLocation: 'Miskatonic University',
            monsterDeck: ['Zombie', 'Cultist'],
            mythosCup: ['Clue', 'Doom', 'Burst', 'Monster', 'Blank'],
            staringCodex: [2, 3],
            anomalyDeck: 'They Fall Slowly',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Zombie', 'Cultist'],
            startingCreaturesLocations: ['Cave', 'Park']
        }, 
        { 
            name: 'Veil of Twilight', 
            startingLocation: 'Miskatonic University',
            monsterDeck: ['Zombie', 'Cultist'],
            mythosCup: ['Clue', 'Doom', 'Burst', 'Monster', 'Blank'],
            staringCodex: [2, 3],
            anomalyDeck: 'They Fall Slowly',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Zombie', 'Cultist'],
            startingCreaturesLocations: ['Cave', 'Park']
        }, 
        { 
            name: 'Echoes of the Deep', 
            startingLocation: 'Miskatonic University',
            monsterDeck: ['Zombie', 'Cultist'],
            mythosCup: ['Clue', 'Doom', 'Burst', 'Monster', 'Blank'],
            staringCodex: [2, 3],
            anomalyDeck: 'They Fall Slowly',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Zombie', 'Cultist'],
            startingCreaturesLocations: ['Cave', 'Park']
        }, 
        { 
            name: 'Shots in the Dark', 
            startingLocation: 'Miskatonic University',
            monsterDeck: ['Zombie', 'Cultist'],
            mythosCup: ['Clue', 'Doom', 'Burst', 'Monster', 'Blank'],
            staringCodex: [2, 3],
            anomalyDeck: 'They Fall Slowly',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Zombie', 'Cultist'],
            startingCreaturesLocations: ['Cave', 'Park']
        }, 
        { 
            name: 'Silence of Tsathoggua', 
            startingLocation: 'Miskatonic University',
            monsterDeck: ['Zombie', 'Cultist'],
            mythosCup: ['Clue', 'Doom', 'Burst', 'Monster', 'Blank'],
            staringCodex: [2, 3],
            anomalyDeck: 'They Fall Slowly',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Zombie', 'Cultist'],
            startingCreaturesLocations: ['Cave', 'Park']
        }, 
        { 
            name: 'The Pale Lantern', 
            startingLocation: 'Miskatonic University',
            monsterDeck: ['Zombie', 'Cultist'],
            mythosCup: ['Clue', 'Doom', 'Burst', 'Monster', 'Blank'],
            staringCodex: [2, 3],
            anomalyDeck: 'They Fall Slowly',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Zombie', 'Cultist'],
            startingCreaturesLocations: ['Cave', 'Park']
        }, 
        { 
            name: 'Dreams of R\'lyeh', 
            startingLocation: 'Miskatonic University',
            monsterDeck: ['Zombie', 'Cultist'],
            mythosCup: ['Clue', 'Doom', 'Burst', 'Monster', 'Blank'],
            staringCodex: [2, 3],
            anomalyDeck: 'They Fall Slowly',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Zombie', 'Cultist'],
            startingCreaturesLocations: ['Cave', 'Park']
        }, 
        { 
            name: 'Ithaqua\'s Children', 
            startingLocation: 'Miskatonic University',
            monsterDeck: ['Zombie', 'Cultist'],
            mythosCup: ['Clue', 'Doom', 'Burst', 'Monster', 'Blank'],
            staringCodex: [2, 3],
            anomalyDeck: 'They Fall Slowly',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Zombie', 'Cultist'],
            startingCreaturesLocations: ['Cave', 'Park']
        }, 
        { 
            name: 'Tyrants of Ruin', 
            startingLocation: 'Miskatonic University',
            monsterDeck: ['Zombie', 'Cultist'],
            mythosCup: ['Clue', 'Doom', 'Burst', 'Monster', 'Blank'],
            staringCodex: [2, 3],
            anomalyDeck: 'They Fall Slowly',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Zombie', 'Cultist'],
            startingCreaturesLocations: ['Cave', 'Park']
        }, 
        { 
            name: 'The Dead Cry Out', 
            startingLocation: 'Miskatonic University',
            monsterDeck: ['Zombie', 'Cultist'],
            mythosCup: ['Clue', 'Doom', 'Burst', 'Monster', 'Blank'],
            staringCodex: [2, 3],
            anomalyDeck: 'They Fall Slowly',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Zombie', 'Cultist'],
            startingCreaturesLocations: ['Cave', 'Park']
        }, 
        { 
            name: 'Bound to Serve', 
            startingLocation: 'Miskatonic University',
            monsterDeck: ['Zombie', 'Cultist'],
            mythosCup: ['Clue', 'Doom', 'Burst', 'Monster', 'Blank'],
            staringCodex: [2, 3],
            anomalyDeck: 'They Fall Slowly',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Zombie', 'Cultist'],
            startingCreaturesLocations: ['Cave', 'Park']
        }, 
        { 
            name: 'The Key and the Gate', 
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

    const maps = await Map.create([
        { 
            scenario: scenarios[0], 
            neighborhoods: [
                'Northside', 
                'Downtown',
                'Easttown', 
                'Merchant District', 
                'Rivertown' 
            ], 
            scenicStreets: 2,
            residentialStreets: 3,
            bridges: 2
        },
        {
            scenario: scenarios[1],
            neighborhoods: [
                'Downtown', 
                'Easttown', 
                'Rivertown', 
                'Uptown', 
                'Southside'
            ],
            scenicStreets: 3,
            residentialStreets: 5,
            bridges: 1
        }
    ]);

    const monsters = await Monster.create([
        {
            name: 'Abyssal Servant',
            type: 'Nightgaunt',
            movement: 2,
            remnant: true,
            health: 4,
            attackMod: 1,
            evadeMod: 2,
            healthDmg: 1,
            sanityDmg: 2
        }, 
        {
            name: 'Altered Servant',
            type: 'Human Thrall',
            movement: 2,
            remnant: true,
            health: 2,
            attackMod: 0,
            evadeMod: 1,
            healthDmg: 1,
            sanityDmg: 1
        }, 
        {
            name: 'Avian Thrall',
            type: 'Thrall',
            movement: 3,
            remnant: true,
            health: 3,
            attackMod: 2,
            evadeMod: 1,
            healthDmg: 1,
            sanityDmg: 2
        }, 
        {
            name: 'Bloody Titan',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Brawling Riot', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Brutal Goons',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Capricious Stalker',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Cerebral Extractor', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Corben Bouchard',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Corpse-Taker',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Coursing Hound', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Crawling One', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Crazed Fiend', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Cruel Slaver', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Dread Shadow',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Eyeless Watcher', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Feckless Agitator', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Ghoul Acolyte',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Ghoul Priest',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Gluttonous Giant', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Grasping Fungus',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Guardian Beast', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Haunting Dead',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'High Priest',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Hit Squad',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Hooded Stalker',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Hovering Byakhee',  
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Hulking Thrall',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Hybrid Thug',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Icebound Captive',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Lodge Enforcer',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Lodge Guardian', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Lodge Loyalist',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Lodge Seer',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Lupine Thrall',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Menacing Bulk', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Mob Enforcer', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Morphic Terror', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Mouthy Raconteur', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Nightmarish Fiend',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Occult Ritualist',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Ocean Scion',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Prowling Abductor', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'R\'lyeh Guardian',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Raging Poltergeist', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        { 
            name: 'Ravenous Predator', 
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
            name: 'River Skulk', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Robed Figure',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Rough Bootlegger', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Ruth Turner',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Sea Singer',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Simon Carter',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Siobhan Riley', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Stalking Wraith', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        { 
            name: 'Swift Byakhee', 
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
            name: 'Swooping Scavenger', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Taloned Cannibal', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Terrified Wanderer', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Tindalos Alpha',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Tunneling Dhole', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Twilight Sentry', 
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        {
            name: 'Twilight Supplicant',
            type: 'Humanoid',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }, 
        { 
            name: 'Undulating Mass', 
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
            name: 'Void Touched', 
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
            name: 'Wake Titan', 
            type: 'Undead', 
            movement: 1,
            remnant: false,
            health: 2,
            attackMod: 1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0
        }
        
    ]);

    const spells = await Spell.create([
        { 
            name: 'Astral Projection',  
            type: 'Ritual', 
            buyCost: 4, 
            hands: 0, 
            castCost: 2 
        }, 
        { 
            name: 'Astral Travel', 
            type: 'Incantation', 
            buyCost: 2,
            hands: 1,
            castCost: 1
        }, 
        { 
            name: 'Banishment', 
            type: 'Incantation', 
            buyCost: 2, 
            hands: 0, 
            castCost: 1 
        }, 
        { 
            name: 'Clairvoyance', 
            type: 'Incantation', 
            buyCost: 2,
            hands: 0,
            castCost: 1
        }, 
        { 
            name: 'Find Gate', 
            type: 'Ritual', 
            buyCost: 4,
            hands: 1,
            castCost: 1
        }, 
        { 
            name: 'Flesh Ward', 
            type: 'Incantation', 
            buyCost: 3,
            hands: 1,
            castCost: 1
        }, 
        { 
            name: 'Instill Bravery',   
            type: 'Incantation', 
            buyCost: 4,
            hands: 1,
            castCost: 1
        }, 
        { 
            name: 'Intervene', 
            type: 'Incantation', 
            buyCost: 4,
            hands: 2,
            castCost: 2
        }, 
        { 
            name: 'Mists of R\'lyeh', 
            type: 'Incantation', 
            buyCost: 1,
            hands: 0,
            castCost: 1
        }, 
        { 
            name: 'Lure Monster', 
            type: 'Incantation', 
            buyCost: 2,
            hands: 0,
            castCost: 1
        }, 
        { 
            name: 'Shriveling', 
            type: 'Ritual', 
            buyCost: 3,
            hands: 0,
            castCost: 1
        }, 
        { 
            name: 'The Beast Within', 
            type: 'Incantation', 
            buyCost: 3,
            hands: 0, 
            castCost: 1 
        }, 
        {
            name: 'Wither', 
            type: 'Incantation', 
            buyCost: 2,
            hands: 1,
            castCost: 1
        }, 
        { 
            name: 'Wrack', 
            type: 'Ritual', 
            buyCost: 2,
            hands: 1,
            castCost: 1
        }, 
    ]);

    console.log(allies, investigators, items, maps, monsters, scenarios, spells);

    process.exit();
})();