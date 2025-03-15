require('dotenv').config();
require('./database');

const Ally = require('../models/ally');
const Investigator = require('../models/investigator');
const Item = require('../models/item');
const Location = require('../models/location');
const Map = require('../models/gameMap');
const Monster = require('../models/monster');
const Neighborhood = require('../models/neighborhood');
const Scenario = require('../models/scenario');
const Spell = require('../models/spell');

(async function() {
    await Ally.deleteMany({});
    await Investigator.deleteMany({});
    await Item.deleteMany({});
    await Location.deleteMany({});
    await Map.deleteMany({});
    await Monster.deleteMany({});
    await Neighborhood.deleteMany({});
    await Scenario.deleteMany({});
    await Spell.deleteMany({});

    const allies = await Ally.create([
        { name: 'Alice Luxley', type: 'Police Detective', health: 3, sanity: 2 },
        { name: 'Gabriel Carillo', type: 'Teacher', health: 2, sanity: 1 },
        { name: 'Lewis Hayes', type: 'University Professor', health: 1, sanity: 4 }
    ]);

    const investigators = await Investigator.create([
        /* { 
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
        }, */ 
        /* { 
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
        }, */ 
        /* { 
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
        }, */ 
        { 
            name:'Agnes Baker', 
            focusLimit: 2, 
            health: 6, 
            sanity: 6, 
            lore: 4, 
            influence: 2, 
            observation: 2, 
            strength: 2, 
            will: 3, 
            primaryRole: 'Mystic', 
            secondaryRole: 'Guardian', 
            startingMoney: 3, 
            startingItemStatic: 'Heirloom of Hyperborea', 
            startingItemChoices: ['Storm of Spirits', 'Flesh Ward'] 
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
        /* { 
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
        }, */ 
        /* { 
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
        }, */ 
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
            primaryRole: '?', 
            secondaryRole: '?', 
            startingMoney: 0, // change this with correct money
            startingItemStatic: '?', 
            startingItemChoices: ['?', '?']
        }, 
        { 
            name:'Dexter Drake', 
            focusLimit: 1, // equal to how many spells he has - change this
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
        /* { 
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
        }, */ 
        /* { 
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
        }, */ 
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
        /* { 
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
        }, */ 
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
        /* { 
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
        }, */ 
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
        /* { 
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
        }, */ 
        /* { 
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
        }, */ 
        { 
            name:'Rex Murphy', 
            focusLimit: 5, // actually unlimited 
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
        /* {
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
        }, */ 
        /* { 
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
        }, */ 
        /* { 
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
        }, */ 
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
        /* { 
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
        }, */ 
        /* { 
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
        } */
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
            startingLocation: 'Train Station',
            monsterDeck: [
                'Abyssal Servant', 
                'Eyeless Watcher', 
                'High Priest', 
                'Hooded Stalker',
                'Hooded Stalker',
                'Occult Ritualist',
                'Occult Ritualist',
                'Robed Figure',
                'Robed Figure',
                'Robed Figure',
                'Swift Byakhee',
                // and all Hound of Tindalos monsters
            ],
            mythosCup: [
                'Doom', 'Doom', 'Doom', 'Monster', 'Monster', 'Clue', 'Clue',
                'Headline', 'Headline', 'Burst', 'Reckoning', 'Blank', 'Blank',
                'Blank' 
            ],
            startingCodex: [2, 3],
            anomalyDeck: 'Temporal Fissure',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Robed Figure', 'Robed Figure'],
            startingCreaturesLocations: ['Cave', 'Park']
        }, 
        { 
            name: 'Feast for Umôrdhoth', 
            startingLocation: 'General Store',
            monsterDeck: [
                'Abyssal Servant', 
                'Corpse-Taker', 
                'Eyeless Watcher', 
                'Hooded Stalker', 
                'Hooded Stalker',
                'Masked Ones',
                // and all Ghoul monsters
            ],
            // seperate 'worshipers of Umordhoth' deck
            // ['Alma Hill', 
            // 'Billy Cooper', 
            // 'Herman Collins', 
            // 'Masked Hunter',
            // 'Ruth Turner', 
            // '"Wolf-Man" Drew'],
            mythosCup: [
                'Doom', 'Doom', 'Doom', 'Monster', 'Monster', 'Clue', 'Clue',
                'Headline', 'Headline', 'Burst', 'Reckoning', 'Blank', 'Blank',
                'Blank' 
            ],
            startingCodex: [1, 10, 11],
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Vicious Glutton', 'Hooded Stalker'], 
            startingCreaturesLocations: ['Cave', 'Park']
        }, 
        { 
            name: 'Veil of Twilight', 
            startingLocation: 'Ma\'s Boarding House',
            monsterDeck: [
                'Altered Beast', 
                'Altered Beast',
                'Whippoorwills',
                'Whippoorwills',
                // and all Thrall monsters
            ],
            // also set aside all Lodge monsters at set-up
            mythosCup: [
                'Doom', 'Doom', 'Doom', 'Monster', 'Monster', 'Clue', 'Clue',
                'Headline', 'Headline', 'Burst', 'Reckoning', 'Blank', 'Blank',
                'Blank' 
            ],
            startingCodex: [2, 20, 21],
            anomalyDeck: 'Fractured Reality',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Hulking Thrall', 'Void Touched'],
            startingCreaturesLocations: ['Cave', 'Park'],
            // there is also a starting white marker at the Black Cave...
        }, 
        { 
            name: 'Echoes of the Deep', 
            startingLocation: 'Observatory',
            monsterDeck: [
                'Hooded Stalker', 
                'Hooded Stalker',
                'Occult Ritualist',
                'Occult Ritualist',
                'R\'lyeh Guardian',
                // and all Deep One monsters
            ],
            mythosCup: [
                'Doom', 'Doom', 'Doom', 'Monster', 'Monster', 'Clue', 'Clue',
                'Headline', 'Headline', 'Burst', 'Reckoning', 'Blank', 'Blank',
                'Blank' 
            ],
            startingCodex: [2, 29, 30],
            anomalyDeck: 'Nightmare Breach',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['River Skulk', 'Hybrid Thug'],
            startingCreaturesLocations: ['Cave', 'Park']
        }, 
        /* { 
            name: 'Shots in the Dark', 
            startingLocation: 'Miskatonic University',
            monsterDeck: ['Zombie', 'Cultist'],
            mythosCup: ['Clue', 'Doom', 'Burst', 'Monster', 'Blank'],
            staringCodex: [2, 3],
            anomalyDeck: 'They Fall Slowly',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Zombie', 'Cultist'],
            startingCreaturesLocations: ['Cave', 'Park']
        }, */ 
        /* { 
            name: 'Silence of Tsathoggua', 
            startingLocation: 'Miskatonic University',
            monsterDeck: ['Zombie', 'Cultist'],
            mythosCup: ['Clue', 'Doom', 'Burst', 'Monster', 'Blank'],
            staringCodex: [2, 3],
            anomalyDeck: 'They Fall Slowly',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Zombie', 'Cultist'],
            startingCreaturesLocations: ['Cave', 'Park']
        }, */ 
        /* { 
            name: 'The Pale Lantern', 
            startingLocation: 'Miskatonic University',
            monsterDeck: ['Zombie', 'Cultist'],
            mythosCup: ['Clue', 'Doom', 'Burst', 'Monster', 'Blank'],
            staringCodex: [2, 3],
            anomalyDeck: 'They Fall Slowly',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Zombie', 'Cultist'],
            startingCreaturesLocations: ['Cave', 'Park']
        }, */ 
        /* { 
            name: 'Dreams of R\'lyeh', 
            startingLocation: 'Miskatonic University',
            monsterDeck: ['Zombie', 'Cultist'],
            mythosCup: ['Clue', 'Doom', 'Burst', 'Monster', 'Blank'],
            staringCodex: [2, 3],
            anomalyDeck: 'They Fall Slowly',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Zombie', 'Cultist'],
            startingCreaturesLocations: ['Cave', 'Park']
        }, */ 
        /* { 
            name: 'Ithaqua\'s Children', 
            startingLocation: 'Miskatonic University',
            monsterDeck: ['Zombie', 'Cultist'],
            mythosCup: ['Clue', 'Doom', 'Burst', 'Monster', 'Blank'],
            staringCodex: [2, 3],
            anomalyDeck: 'They Fall Slowly',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Zombie', 'Cultist'],
            startingCreaturesLocations: ['Cave', 'Park']
        }, */ 
        /* { 
            name: 'Tyrants of Ruin', 
            startingLocation: 'Miskatonic University',
            monsterDeck: ['Zombie', 'Cultist'],
            mythosCup: ['Clue', 'Doom', 'Burst', 'Monster', 'Blank'],
            staringCodex: [2, 3],
            anomalyDeck: 'They Fall Slowly',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Zombie', 'Cultist'],
            startingCreaturesLocations: ['Cave', 'Park']
        }, */ 
        /* { 
            name: 'The Dead Cry Out', 
            startingLocation: 'Miskatonic University',
            monsterDeck: ['Zombie', 'Cultist'],
            mythosCup: ['Clue', 'Doom', 'Burst', 'Monster', 'Blank'],
            staringCodex: [2, 3],
            anomalyDeck: 'They Fall Slowly',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Zombie', 'Cultist'],
            startingCreaturesLocations: ['Cave', 'Park']
        }, */ 
        /* { 
            name: 'Bound to Serve', 
            startingLocation: 'Miskatonic University',
            monsterDeck: ['Zombie', 'Cultist'],
            mythosCup: ['Clue', 'Doom', 'Burst', 'Monster', 'Blank'],
            staringCodex: [2, 3],
            anomalyDeck: 'They Fall Slowly',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Zombie', 'Cultist'],
            startingCreaturesLocations: ['Cave', 'Park']
        }, */ 
        /* { 
            name: 'The Key and the Gate', 
            startingLocation: 'Miskatonic University',
            monsterDeck: ['Zombie', 'Cultist'],
            mythosCup: ['Clue', 'Doom', 'Burst', 'Monster', 'Blank'],
            staringCodex: [2, 3],
            anomalyDeck: 'They Fall Slowly',
            startingDoomLocations: ['Cave', 'Park'],
            startingCreatures: ['Zombie', 'Cultist'],
            startingCreaturesLocations: ['Cave', 'Park']
        } */
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
            bridges: 2,
            unstableSpace: 'Train Station',
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
            scenicStreets: 2,
            residentialStreets: 2,
            bridges: 2,
            unstableSpace: 'General Store',
        },
        {
            scenario: scenarios[2],
            neighborhoods: [
                'Northside', 
                'Miskatonic University', 
                'Rivertown', 
                'Uptown', 
                'Southside'
            ],
            scenicStreets: 2,
            residentialStreets: 2,
            bridges: 1,
            unstableSpace: 'Ma\'s Boarding House',
        },
        {
            scenario: scenarios[3],
            neighborhoods: [
                'Northside',
                'Downtown', 
                'Merchant District', 
                'Rivertown', 
                'Miskatonic University'
            ],
            scenicStreets: 2,
            residentialStreets: 3,
            bridges: 1,
            unstableSpace: 'Observatory',
        }
    ]);

    const monsters = await Monster.create([
        {
            // base game
            name: 'Abyssal Servant',
            type: 'Nightgaunt',
            movement: 2,
            remnant: true,
            health: 4,
            attackMod: -1,
            evadeMod: -2,
            healthDmg: 1,
            sanityDmg: 2
        }, 
        {
            // base game
            name: 'Alma Hill',
            type: 'Human Cultist',
        },
        {
            // base game
            name: 'Altered Beast',
            type: 'Aberration',
            movement: 2,
        },
        {
            // base game
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
            // base game
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
            // base game
            name: 'Billy Cooper',
            type: 'Human Cultist',
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
            // not sure if base game - double check
            name: 'Corpse-Taker',
            type: 'Aberration',
            movement: 1,
            remnant: true,
            health: 2, // Elite 1 monster: 1 additional health for each investigator
            attackMod: -2,
            evadeMod: -1,
            healthDmg: 2,
            sanityDmg: 2
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
            // base game
            name: 'Eyeless Watcher', 
            type: 'Nightgaunt',
            movement: 1,
            remnant: true,
            health: 3,
            attackMod: 0,
            evadeMod: -2,
            healthDmg: 0,
            sanityDmg: 1
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
            // base game
            name: 'Flesh-Eater',
            type: 'Ghoul',
            movement: 2,
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
            // base game
            name: 'Herman Collins',
            type: 'Human Cultist',
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
            // base game
            name: 'Hooded Stalker',
            type: 'Human Cultist',
            movement: 2,
            spawnLocation: 'most doom',
            remnant: false,
            health: 1,
            attackMod: 0,
            evadeMod: -1,
            healthDmg: 1,
            sanityDmg: 0,
            activation: 'hunter',
            moveTarget: 'lowest strength',
            engageTarget: 'lowest strength'
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
            // base game
            name: 'Keening Hound',
            type: 'Hound of Tindalos',
        },
        {
            // base game
            name: 'Lodge Enforcer',
            type: 'Lodge Human',
            movement: 2,
            spawnLocation: 'unstable space',
            remnant: false,
            health: 1,
            attackMod: 0,
            evadeMod: -1,
            healthDmg: 2,
            sanityDmg: 0,
            activation: 'hunter',
            moveTarget: 'highest lore',
            engageTarget: 'highest lore'
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
            // base game
            name: 'Lodge Loyalist',
            type: 'Lodge Human',
            movement: 2,
            spawnLocation: 'most doom',
            remnant: false,
            health: 1,
            attackMod: -1,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 1,
            activation: 'patrol',
            moveTarget: 'most doom',
            engageTarget: 'most spells'
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
            // base game
            name: 'Masked Ones',
            type: 'Human Cultist',
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
            // base game
            name: 'Occult Ritualist',
            type: 'Human Cultist',
            spawnStreet: 'nearest leader',
            remnant: false,
            health: 1,
            attackMod: 0,
            evadeMod: 1,
            healthDmg: 0,
            sanityDmg: 1,
            activation: 'lurker'
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
            // base game
            name: 'Ravenous Predator', 
            type: 'Hound of Tindalos', 
            remnant: true,
            health: 3,
            attackMod: -1,
            evadeMod: -1,
            healthDmg: 1,
            sanityDmg: 1
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
            // base game
            name: 'Robed Figure',
            type: 'Human Cultist',
            movement: 2,
            spawnLocation: 'unstable space',
            remnant: false,
            health: 1,
            attackMod: 0,
            evadeMod: 0,
            healthDmg: 1,
            sanityDmg: 0,
            activation: 'patrol',
            moveTarget: 'unstable space',
            engageTarget: 'highest influence'
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
            // base game
            name: 'Simon Carter',
            type: 'Lodge Human',
            spawnStreet: 'nearest leader',
            remnant: false,
            health: 2, // Elite 1 monster: additional 1 health per investigator
            attackMod: -1,
            evadeMod: -1,
            healthDmg: 1,
            sanityDmg: 1,
            activation: 'lurker'
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
            // base game
            name: 'Swift Byakhee', 
            type: 'Byakhee', 
            movement: 3,
            remnant: true,
            health: 3,
            attackMod: 0,
            evadeMod: -1,
            healthDmg: 1,
            sanityDmg: 1
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
            // base game
            name: 'Tindalos Alpha',
            type: 'Hound of Tindalos',
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
            // base game
            name: 'Twilight Supplicant',
            type: 'Lodge Human',
            movement: 1,
            remnant: false,
            health: 1,
            attackMod: 0,
            evadeMod: 0,
            healthDmg: 0,
            sanityDmg: 2
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

    const neighborhoods = await Neighborhood.create([
        // Approach of Azathoth
        {
            map: maps[0],
            name: 'Northside',
            clues: 0,
            doom: 0,
            locations: [locations[0], locations[1], locations[2]],
            anomaly: false
        },
        {
            map: maps[0],
            name: 'Downtown',
            clues: 0,
            doom: 0,
            locations: [locations[3], locations[4], locations[5]],
            anomaly: false
        },
        {
            map: maps[0],
            name: 'Easttown',
            clues: 0,
            doom: 0,
            locations: [locations[6], locations[7], locations[8]],
            anomaly: false
        },
        {
            map: maps[0],
            name: 'Merchant District',
            clues: 0,
            doom: 0,
            locations: [locations[9], locations[10], locations[11]],
            anomaly: false
        },
        {
            map: maps[0],
            name: 'Rivertown',
            clues: 0,
            doom: 0,
            locations: [locations[12], locations[13], locations[14]],
            anomaly: false
        },
        // Feast for Umôrdhoth
        {
            map: maps[1],
            name: 'Downtown',
            clues: 0,
            doom: 0,
            locations: [locations[15], locations[16], locations[17]],
            anomaly: false
        },
        {
            map: maps[1],
            name: 'Easttown',
            clues: 0,
            doom: 0,
            locations: [locations[18], locations[19], locations[20]],
            anomaly: false
        },
        {
            map: maps[1],
            name: 'Rivertown',
            clues: 0,
            doom: 0,
            locations: [locations[21], locations[22], locations[23]],
            anomaly: false
        },
        {
            map: maps[1],
            name: 'Uptown',
            clues: 0,
            doom: 0,
            locations: [locations[24], locations[25], locations[26]],
            anomaly: false
        },
        {
            map: maps[1],
            name: 'Southside',
            clues: 0,
            doom: 0,
            locations: [locations[27], locations[28], locations[29]],
            anomaly: false
        },
        // Veil of Twilight
        {
            map: maps[2],
            name: 'Northside',
            clues: 0,
            doom: 0,
            locations: [locations[30], locations[31], locations[32]],
            anomaly: false
        },
        {
            map: maps[2],
            name: 'Miskatonic University',
            clues: 0,
            doom: 0,
            locations: [locations[33], locations[34], locations[35]],
            anomaly: false
        },
        {
            map: maps[2],
            name: 'Rivertown',
            clues: 0,
            doom: 0,
            locations: [locations[36], locations[37], locations[38]],
            anomaly: false
        },
        {
            map: maps[2],
            name: 'Uptown',
            clues: 0,
            doom: 0,
            locations: [locations[39], locations[40], locations[41]],
            anomaly: false
        },
        {
            map: maps[2],
            name: 'Southside',
            clues: 0,
            doom: 0,
            locations: [locations[42], locations[43], locations[44]],
            anomaly: false
        },
        // Echoes of the Deep
        {
            map: maps[3],
            name: 'Northside',
            clues: 0,
            doom: 0,
            locations: [locations[45], locations[46], locations[47]],
            anomaly: false
        },
        {
            map: maps[3],
            name: 'Downtown',
            clues: 0,
            doom: 0,
            locations: [locations[48], locations[49], locations[50]],
            anomaly: false
        },
        {
            map: maps[3],
            name: 'Merchant District',
            clues: 0,
            doom: 0,
            locations: [locations[51], locations[52], locations[53]],
            anomaly: false
        },
        {
            map: maps[3],
            name: 'Rivertown',
            clues: 0,
            doom: 0,
            locations: [locations[54], locations[55], locations[56]],
            anomaly: false
        },
        {
            map: maps[3],
            name: 'Miskatonic University',
            clues: 0,
            doom: 0,
            locations: [locations[57], locations[58], locations[59]],
            anomaly: false
        }
    ]);

    const locations = await Location.create([
        // Approach of Azathoth
        {
            neighborhood: neighborhoods[0],
            name: 'Arkham Advertiser',
            adjacentLocations: [locations[1], locations[2]],
            // adjacentStreets: [streets[0]]
        },
        {
            neighborhood: neighborhoods[0],
            name: 'Curiositie Shoppe',
            adjacentLocations: [locations[0], locations[2]]
        },
        {
            neighborhood: neighborhoods[0],
            name: 'Train Station',
            adjacentLocations: [locations[0], locations[1]],
            // adjacentStreets: [streets[0], streets[2]]
        },
        {
            neighborhood: neighborhoods[1],
            name: 'Independence Square',
            adjacentLocations: [locations[4], locations[5]],
            // adjacentStreets: [streets[1]]
        },
        {
            neighborhood: neighborhoods[1],
            name: 'Arkham Asylum',
            adjacentLocations: [locations[3], locations[5]],
            // adjacentStreets: [streets[0], streets[3]]
        },
        {
            neighborhood: neighborhoods[1],
            name: 'La Bella Luna',
            adjacentLocations: [locations[3], locations[4]],
            // adjacentStreets: [streets[1], streets[3], streets[4]]
        },
        {
            neighborhood: neighborhoods[2],
            name: 'Velma\'s Diner',
            adjacentLocations: [locations[7], locations[8]],
            // adjacentStreets: [streets[1]]
        },
        {
            neighborhood: neighborhoods[2],
            name: 'Hibb\'s Roadhouse',
            adjacentLocations: [locations[6], locations[8]]
        },
        {
            neighborhood: neighborhoods[2],
            name: 'Police Station',
            adjacentLocations: [locations[6], locations[7]],
            // adjacentStreets: [streets[1], streets[5]]
        },
        {
            neighborhood: neighborhoods[3],
            name: 'Unvisited Isle',
            adjacentLocations: [locations[10], locations[11]],
            // adjacentStreets: [streets[2], streets[3], streets[6]]
        },
        {
            neighborhood: neighborhoods[3],
            name: 'River Docks',
            adjacentLocations: [locations[9], locations[11]],
            // adjacentStreets: [streets[2]]
        },
        {
            neighborhood: neighborhoods[3],
            name: 'Tick-Tock Club',
            adjacentLocations: [locations[9], locations[10]],
            // adjacentStreets: [streets[6]]
        },
        {
            neighborhood: neighborhoods[4],
            name: 'Black Cave',
            adjacentLocations: [locations[13], locations[14]],
            // adjacentStreets: [streets[4], streets[5], streets[6]]
        },
        {
            neighborhood: neighborhoods[4],
            name: 'Graveyard',
            adjacentLocations: [locations[12], locations[14]],
            // adjacentStreets: [streets[5]]
        },
        {
            neighborhood: neighborhoods[4],
            name: 'General Store',
            adjacentLocations: [locations[12], locations[13]],
            // adjacentStreets: [streets[6]]
        },
        // Feast for Umôrdhoth
        {
            neighborhood: neighborhoods[5],
            name: 'Independence Square',
            adjacentLocations: [locations[16], locations[17]],
            // adjacentStreets: [streets[7]]
        },
        {
            neighborhood: neighborhoods[5],
            name: 'Arkham Asylum',
            adjacentLocations: [locations[15], locations[17]],
        },
        {
            neighborhood: neighborhoods[5],
            name: 'La Bella Luna',
            adjacentLocations: [locations[15], locations[16]],
            // adjacentStreets: [streets[7], streets[8]]
        },
        {
            neighborhood: neighborhoods[6],
            name: 'Velma\'s Diner',
            adjacentLocations: [locations[19], locations[20]],
            // adjacentStreets: [streets[7]]
        },
        {
            neighborhood: neighborhoods[6],
            name: 'Hibb\'s Roadhouse',
            adjacentLocations: [locations[18], locations[20]],
        },
        {
            neighborhood: neighborhoods[6],
            name: 'Police Station',
            adjacentLocations: [locations[18], locations[19]],
            // adjacentStreets: [streets[7], streets[9]]
        },
        {
            neighborhood: neighborhoods[7],
            name: 'Black Cave',
            adjacentLocations: [locations[22], locations[23]],
            // adjacentStreets: [streets[8], streets[9]]
        },
        {
            neighborhood: neighborhoods[7],
            name: 'Graveyard',
            adjacentLocations: [locations[21], locations[23]],
            // adjacentStreets: [streets[9], streets[11]]
        },
        {
            neighborhood: neighborhoods[7],
            name: 'General Store',
            adjacentLocations: [locations[21], locations[22]],
            // adjacentStreets: [streets[10], streets[11]]
        },
        {
            neighborhood: neighborhoods[8],
            name: 'Hangman\'s Hill',
            adjacentLocations: [locations[25], locations[26]],
            // adjacentStreets: [streets[10]]
        },
        {
            neighborhood: neighborhoods[8],
            name: 'St. Mary\'s Hospital',
            adjacentLocations: [locations[24], locations[26]],
            // adjacentStreets: [streets[10], streets[12]]
        },
        {
            neighborhood: neighborhoods[8],
            name: 'Ye Olde Magick Shoppe',
            adjacentLocations: [locations[24], locations[25]]
        },
        {
            neighborhood: neighborhoods[9],
            name: 'Ma\'s Boarding House',
            adjacentLocations: [locations[28], locations[29]],
            // adjacentStreets: [streets[11]]
        },
        {
            neighborhood: neighborhoods[9],
            name: 'South Church',
            adjacentLocations: [locations[27], locations[29]],
            // adjacentStreets: [streets[11], streets[12]]
        },
        {
            neighborhood: neighborhoods[9],
            name: 'Historical Society',
            adjacentLocations: [locations[27], locations[28]]
        },
        // Veil of Twilight
        {
            neighborhood: neighborhoods[10],
            name: 'Arkham Advertiser',
            adjacentLocations: [locations[31], locations[32]]
        },
        {
            neighborhood: neighborhoods[10],
            name: 'Curiositie Shoppe',
            adjacentLocations: [locations[30], locations[32]]
        },
        {
            neighborhood: neighborhoods[10],
            name: 'Train Station',
            adjacentLocations: [locations[30], locations[31]],
            // adjacentStreets: [streets[13]]
        },
        {
            neighborhood: neighborhoods[11],
            name: 'Observatory',
            adjacentLocations: [locations[34], locations[35]],
            // adjacentStreets: [streets[14]]
        },
        {
            neighborhood: neighborhoods[11],
            name: 'Orne Library',
            adjacentLocations: [locations[33], locations[35]]
        },
        {
            neighborhood: neighborhoods[11],
            name: 'Science Building',
            adjacentLocations: [locations[33], locations[34]],
            // adjacentStreets: [streets[15]]
        },
        {
            neighborhood: neighborhoods[12],
            name: 'Black Cave',
            adjacentLocations: [locations[37], locations[38]],
            // adjacentStreets: [streets[13], streets[14]]
        },
        {
            neighborhood: neighborhoods[12],
            name: 'Graveyard',
            adjacentLocations: [locations[36], locations[38]],
            // adjacentStreets: streets[16]]
        },
        {
            neighborhood: neighborhoods[12],
            name: 'General Store',
            adjacentLocations: [locations[36], locations[37]],
            // adjacentStreets: [streets[14], streets[16]]
        },
        {
            neighborhood: neighborhoods[13],
            name: 'Hangman\'s Hill',
            adjacentLocations: [locations[40], locations[41]],
            // adjacentStreets: [streets[15]]
        },
        {
            neighborhood: neighborhoods[13],
            name: 'St. Mary\'s Hospital',
            adjacentLocations: [locations[39], locations[41]],
            // adjacentStreets: [streets[17]]
        },
        {
            neighborhood: neighborhoods[13],
            name: 'Ye Olde Magick Shoppe',
            adjacentLocations: [locations[39], locations[40]]
        },
        {
            neighborhood: neighborhoods[14],
            name: 'Ma\'s Boarding House',
            adjacentLocations: [locations[43], locations[44]],
            // adjacentStreets: [streets[16]]
        },
        {
            neighborhood: neighborhoods[14],
            name: 'South Church',
            adjacentLocations: [locations[42], locations[44]],
            // adjacentStreets: [streets[16], streets[17]]
        },
        {
            neighborhood: neighborhoods[14],
            name: 'Historical Society',
            adjacentLocations: [locations[42], locations[43]]
        },
        // Echoes of the Deep
        {
            neighborhood: neighborhoods[15],
            name: 'Arkham Advertiser',
            adjacentLocations: [locations[46], locations[47]],
            // adjacentStreets: [streets[18]]
        },
        {
            neighborhood: neighborhoods[15],
            name: 'Curiositie Shoppe',
            adjacentLocations: [locations[45], locations[47]]
        },
        {
            neighborhood: neighborhoods[15],
            name: 'Train Station',
            adjacentLocations: [locations[45], locations[46]],
            // adjacentStreets: [streets[18], streets[19]]
        },
        {
            neighborhood: neighborhoods[16],
            name: 'Independence Square',
            adjacentLocations: [locations[49], locations[50]]
        },
        {
            neighborhood: neighborhoods[16],
            name: 'Arkham Asylum',
            adjacentLocations: [locations[48], locations[50]],
            // adjacentStreets: [streets[18]]
        },
        {
            neighborhood: neighborhoods[16],
            name: 'La Bella Luna',
            adjacentLocations: [locations[48], locations[49]],
            // adjacentStreets: [streets[20]]
        },
        {
            neighborhood: neighborhoods[17],
            name: 'Unvisited Isle',
            adjacentLocations: [locations[52], locations[53]],
            // adjacentStreets: [streets[19], streets[21]]
        },
        {
            neighborhood: neighborhoods[17],
            name: 'River Docks',
            adjacentLocations: [locations[51], locations[53]],
            // adjacentStreets: [streets[19]]
        },
        {
            neighborhood: neighborhoods[17],
            name: 'Tick-Tock Club',
            adjacentLocations: [locations[51], locations[52]],
            // adjacentStreets: [streets[21], streets[22]]
        },
        {
            neighborhood: neighborhoods[18],
            name: 'Black Cave',
            adjacentLocations: [locations[55], locations[56]],
            // adjacentStreets: [streets[20], streets[21]]
        },
        {
            neighborhood: neighborhoods[18],
            name: 'Graveyard',
            adjacentLocations: [locations[54], locations[56]]
        },
        {
            neighborhood: neighborhoods[18],
            name: 'General Store',
            adjacentLocations: [locations[54], locations[55]],
            // adjacentStreets: [streets[23]]
        },
        {
            neighborhood: neighborhoods[19],
            name: 'Observatory',
            adjacentLocations: [locations[58], locations[59]],
            // adjacentStreets: [streets[22], streets[23]]
        },
        {
            neighborhood: neighborhoods[19],
            name: 'Orne Library',
            adjacentLocations: [locations[57], locations[59]],
            // adjacentStreets: [streets[22]]
        },
        {
            neighborhood: neighborhoods[19],
            name: 'Science Building',
            adjacentLocations: [locations[57], locations[58]]
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

    console.log(
        allies, 
        investigators, 
        items, 
        scenarios, 
        maps, 
        monsters, 
        neighborhoods, 
        spells
    );

    process.exit();
})();