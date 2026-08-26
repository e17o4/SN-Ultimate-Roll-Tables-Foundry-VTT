export const FANTASY_HEXCRAWL_TABLES = [
  {
    key: "fantasy-terrain",
    name: "SN Fantasy - Terrain Generator",
    formula: "1d12",
    results: [
      [[1, 5], "Same as last Hex"],
      [6, "Same + River/Coast/Lake"],
      [7, "Plains/Fields"],
      [8, "Hills/Tundra"],
      [9, "Forest/Jungle"],
      [10, "Swamp/Marsh"],
      [11, "Mountains"],
      [12, "Desert/Barren"]
    ]
  },
  {
    key: "fantasy-sea-terrain",
    name: "SN Fantasy - Terrain: Seas",
    formula: "1d12",
    results: [
      [[1, 5], "Open Waters"],
      [[6, 7], "Coastline"],
      [[8, 9], "Small Island"],
      [[10, 11], "Shallow Reefs"],
      [12, "Whirlpool"]
    ]
  },
  {
    key: "fantasy-feature-selector",
    name: "SN Fantasy - Hex Feature Selector",
    formula: "1d6",
    results: [
      [[1, 5], "Roll on the appropriate terrain Feature table"],
      [6, "Roll Settlement"]
    ]
  },
  {
    key: "fantasy-feature-plains",
    name: "SN Fantasy - Features: Plains",
    formula: "1d10",
    results: [
      [1, "Animal Herd"], [2, "Stone Circle"], [3, "Beast Lair"], [4, "Wildflowers"],
      [5, "City Ruins"], [6, "Burial Mound"], [7, "Empty Farm"], [8, "Decrepit Fort"],
      [9, "Meteor Crater"], [10, "Rune Waystone"]
    ]
  },
  {
    key: "fantasy-feature-hills-barren",
    name: "SN Fantasy - Features: Hills/Barren",
    formula: "1d10",
    results: [
      [1, "Active Mine"], [2, "Beast Lair"], [3, "Ancient Cairn"], [4, "Watchtower"],
      [5, "Temple Ruins"], [6, "Ancient Quarry"], [7, "Hilltop Shrine"], [8, "Solitary Hut"],
      [9, "Hidden Caverns"], [10, "Burned Fort"]
    ]
  },
  {
    key: "fantasy-feature-forest-jungle",
    name: "SN Fantasy - Features: Forests/Jungles",
    formula: "1d10",
    results: [
      [1, "Beast Lair"], [2, "Guarded Waterfall"], [3, "Mossy Idol"], [4, "Creeping Vines"],
      [5, "Lost Shrine"], [6, "Carnivorous Plants"], [7, "Hidden Glade"], [8, "Insect Hives"],
      [9, "Lost Village"], [10, "Hidden Ziggurat"]
    ]
  },
  {
    key: "fantasy-feature-swamp-marsh",
    name: "SN Fantasy - Features: Swamp/Marsh",
    formula: "1d10",
    results: [
      [1, "Cursed Pool"], [2, "Hollow Tree"], [3, "Ghostly Lights"], [4, "Fungal Growths"],
      [5, "Bubbling Fen"], [6, "Beast Lair"], [7, "Thorny Thicket"], [8, "Sunken Ruins"],
      [9, "Twisting Roots"], [10, "Flooded Crypt"]
    ]
  },
  {
    key: "fantasy-feature-mountains",
    name: "SN Fantasy - Features: Mountains",
    formula: "1d10",
    results: [
      [1, "Volcanic Crater"], [2, "Bone-Strewn Pass"], [3, "Broken Bridge"], [4, "Cave Entrance"],
      [5, "Hidden Valley"], [6, "Icefall Chasm"], [7, "Ancient Stairs"], [8, "Summit Shrine"],
      [9, "Thundering Waterfall"], [10, "Beast Lair"]
    ]
  },
  {
    key: "fantasy-feature-deserts",
    name: "SN Fantasy - Features: Deserts",
    formula: "1d10",
    results: [
      [1, "Cult Hideout"], [2, "Black Pyramid"], [3, "Ruined Statue"], [4, "Hidden Ravine"],
      [5, "Beast Lair"], [6, "Sunken Oasis"], [7, "Ancient Obelisk"], [8, "Ruined Caravan"],
      [9, "Buried City"], [10, "Scorched Battlefield"]
    ]
  },
  {
    key: "fantasy-settlement-type",
    name: "SN Fantasy - Settlement Type",
    formula: "1d6",
    results: [
      [1, "Village"], [2, "Town"], [3, "City"], [4, "Castle"], [5, "Temple"], [6, "Mage Tower"]
    ]
  },
  {
    key: "fantasy-demi-human-presence",
    name: "SN Fantasy - Demi-Human Presence",
    formula: "1d6",
    results: [
      [1, "Demi-Humans present: roll Demi-Human Type"],
      [[2, 6], "No Demi-Human result"]
    ]
  },
  {
    key: "fantasy-demi-human-type",
    name: "SN Fantasy - Demi-Human Type",
    formula: "1d6",
    results: [
      [[1, 2], "Dwarven"], [[3, 4], "Elven"], [5, "Orcoid"], [6, "Other?"]
    ]
  },
  {
    key: "fantasy-economy",
    name: "SN Fantasy - Settlement Main Economy",
    formula: "1d6",
    results: [
      [1, "Trade/Commerce"], [2, "Mining/Industrial"], [3, "Agricultural"],
      [4, "Crafts/Goods"], [5, "Raiding/War"], [6, "Cultural/Religious"]
    ]
  },
  {
    key: "fantasy-settlement-look",
    name: "SN Fantasy - Settlement Look",
    formula: "1d6",
    results: [
      [1, "Ornate"], [2, "Ancient"], [3, "Modest"], [4, "Struggling"], [5, "Fortified"], [6, "Crumbling"]
    ]
  },
  {
    key: "fantasy-settlement-leadership",
    name: "SN Fantasy - Settlement Leadership",
    formula: "1d6",
    results: [
      [1, "Authoritarian"], [2, "Communal"], [3, "Oligarchy"], [4, "Theocracy"], [5, "Aristocracy"], [6, "Tribalism"]
    ]
  },
  {
    key: "fantasy-settlement-rumors",
    name: "SN Fantasy - Settlement Rumors",
    formula: "1d6",
    results: [
      [1, "Hidden Treasure"], [2, "Cursed Relic"], [3, "Missing Leader"],
      [4, "Secret Cult"], [5, "Drought/Plague"], [6, "Incoming Attack"]
    ]
  },
  {
    key: "fantasy-settlement-districts",
    name: "SN Fantasy - Settlement Districts",
    formula: "1d12",
    results: [
      [1, "Slums"], [2, "Spectacle"], [3, "Artisan"], [4, "Common"], [5, "Market"], [6, "Affluent"],
      [7, "Transient"], [8, "Cultural"], [9, "Palatial"], [10, "Religious"], [11, "Education"], [12, "Fortified"]
    ]
  },
  {
    key: "fantasy-discovery",
    name: "SN Fantasy - Hexcrawl Discovery",
    formula: "1d6",
    results: [
      [1, "Encounter"], [[2, 4], "Nothing"], [[5, 6], "Roll Feature"]
    ]
  },
  {
    key: "fantasy-foraging",
    name: "SN Fantasy - Hexcrawl Foraging",
    formula: "1d6",
    results: [
      [1, "Nothing"], [[2, 3], "+2 Rations"], [[4, 5], "+4 Rations"], [6, "+5 Rations & Bonus"]
    ]
  },
  {
    key: "fantasy-foraging-bonus",
    name: "SN Fantasy - Foraging Bonus",
    formula: "1d6",
    results: [
      [[1, 3], "Healing Herbs d6 HP"], [[4, 5], "Flowers 2d6 value"], [6, "Lotus +1 Random Stat"]
    ]
  },
  {
    key: "fantasy-night-encounter",
    name: "SN Fantasy - Night Encounter",
    formula: "1d6",
    results: [
      [0, "Encounter, +1 Stress"], [1, "Encounter"], [[2, 6], "Nothing Happens"]
    ]
  },
  {
    key: "fantasy-getting-lost",
    name: "SN Fantasy - Getting Lost",
    formula: "1d6",
    results: [
      [[1, 2], "Lost!"], [[3, 6], "Not Lost"]
    ]
  },
  {
    key: "fantasy-weather-land",
    name: "SN Fantasy - Weather (Land)",
    formula: "1d8",
    results: [
      [1, "Terrible: -2 Forage, -2 Lost, +1 Stress"],
      [[2, 3], "Bad: -1 Forage, -1 Lost"],
      [[4, 7], "Neutral: No Changes"],
      [8, "Good: +1 Forage, +1 Lost"]
    ]
  },
  {
    key: "fantasy-weather-seas",
    name: "SN Fantasy - Weather (Seas)",
    formula: "1d6",
    results: [
      [1, "Storm: No Move, +1 Stress"], [[2, 5], "Calm: 2 hexes/day"], [6, "Good Winds: 3 hexes/day"]
    ]
  },
  {
    key: "fantasy-encounter-type",
    name: "SN Fantasy - Encounter Type",
    formula: "1d12",
    results: [
      [[1, 4], "Monsters"], [[5, 6], "Humanoids"], [[7, 8], "Beasts & Animals"], [[9, 12], "NPCs"]
    ]
  },
  {
    key: "fantasy-encounter-size",
    name: "SN Fantasy - Encounter Size",
    formula: "1d12",
    results: [
      [[1, 3], "Lone"], [[4, 8], "Group (2d6)"], [[9, 11], "Group (2d6) + Elite"], [12, "Lair/Force (2d6x10)"]
    ]
  },
  {
    key: "fantasy-reaction",
    name: "SN Fantasy - Reaction / Alignment",
    formula: "2d6",
    results: [
      [[2, 3], "Hostile/Kill!"], [[4, 6], "Unfriendly/Angered"], [[7, 8], "Neutral/Uncertain"],
      [[9, 10], "Favorable/Curious"], [[11, 12], "Helpful/Friendly"]
    ]
  },
  {
    key: "fantasy-humanoid-activity",
    name: "SN Fantasy - Humanoid Activity",
    formula: "1d12",
    results: [
      [1, "Foraging / Crafting"], [2, "Injured / Hunting"], [3, "Trading / Building"], [4, "Guarding / Training"],
      [5, "Patrolling / Exploring"], [6, "Camped / Negotiating"], [7, "Lost / Celebrating"], [8, "Chasing / Escorting"],
      [9, "Raiding / Mining"], [10, "Spying / Scouting"], [11, "Searching / Destroying"], [12, "Battling / Seeking"]
    ]
  },
  {
    key: "fantasy-encounter-identity",
    name: "SN Fantasy - Encounter Identity",
    formula: "2d6",
    results: [
      [2, "A Wizard!"], [3, "Evil Cultists"], [4, "Clerics/Priests"], [5, "Guards/Knights"], [6, "Merchants"],
      [7, "Commoners"], [8, "Bandits/Thugs"], [9, "Wild Beasts"], [10, "Orcs/Goblins"], [11, "Adventurers"], [12, "A Dragon!"]
    ]
  },
  {
    key: "fantasy-enemy-strategy",
    name: "SN Fantasy - Enemy Strategy & Tactics",
    formula: "1d12",
    results: [
      [[1, 5], "Normal - Move & Basic Attack"],
      [[6, 8], "Move and Use Special Attacks/Abilities"],
      [[9, 10], "Defensive Formations, Take Cover"],
      [11, "Advance - Attempts to gain an advantage"],
      [12, "Reckless - Charge Closest foe, -1 to dodge"]
    ]
  },
  {
    key: "fantasy-enemy-target",
    name: "SN Fantasy - Enemy Set Target",
    formula: "1d10",
    results: [
      [[1, 2], "Random"], [[3, 7], "Nearest"], [[8, 9], "Strongest"], [10, "Weakest (least HP)"]
    ]
  },
  {
    key: "fantasy-enemy-morale",
    name: "SN Fantasy - Enemy Morale Check",
    formula: "1d10",
    results: [
      [[1, 5], "Runs Away Immediately"], [[6, 7], "Retreats carefully"], [[8, 9], "Stays, Holds Ground"],
      [10, "Renewed Vigor, Regains d6 HP"]
    ]
  }
];
