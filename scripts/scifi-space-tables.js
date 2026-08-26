export const SCIFI_SPACE_TABLES = [
  {
    key: "scifi-system-size",
    name: "SN Sci-Fi - System Size / POI Count",
    formula: "1d6",
    results: [
      [[1, 3], "1d6 Points of Interest"],
      [[4, 5], "1d6+1 Points of Interest"],
      [6, "1d6+2 Points of Interest"]
    ]
  },
  {
    key: "scifi-system-poi",
    name: "SN Sci-Fi - System Point of Interest",
    formula: "1d6",
    results: [
      [1, "Nothing"],
      [2, "Ship/Station"],
      [3, "Anomaly"],
      [4, "Gas Giant"],
      [[5, 6], "Planet"]
    ]
  },
  {
    key: "scifi-anomaly",
    name: "SN Sci-Fi - Space Anomaly",
    formula: "1d6",
    results: [
      [1, "Nebula (Sensors don't work)"],
      [2, "Asteroids (Piloting Save or d6 damage)"],
      [3, "Spatial Rift (Teleports +d6 hexes)"],
      [4, "Pulsar (Can harvest Starfuel)"],
      [5, "Void Storm (2:6 chance to EMP Ship)"],
      [6, "Supernova (Impassable to Ships)"]
    ]
  },
  {
    key: "scifi-star-type",
    name: "SN Sci-Fi - Star Type",
    formula: "1d6",
    results: [
      [1, "Black Hole"],
      [2, "Red Giant"],
      [3, "Dwarf Star"],
      [4, "Neutron Star"],
      [5, "Yellow Star"],
      [6, "Binary (Roll Twice)"]
    ]
  },
  {
    key: "scifi-tech-level",
    name: "SN Sci-Fi - System / Planet Tech Level",
    formula: "1d8",
    results: [
      [1, "Primitive (Tribal/Stone Age)"],
      [2, "Low Tech (Pre-Industrial/Medieval)"],
      [[3, 5], "Developed (Industrial/Spacefaring)"],
      [[6, 7], "Advanced (Cybernetics/Interstellar)"],
      [8, "Ascendant (Psionic/Dimensional)"]
    ]
  },
  {
    key: "scifi-planet-type",
    name: "SN Sci-Fi - Planet Type",
    formula: "1d10",
    results: [
      [1, "Jungle"],
      [2, "Desert"],
      [3, "Barren"],
      [4, "Volcanic"],
      [5, "Icy/Frozen"],
      [6, "Ocean (No Land)"],
      [7, "Earth-Like"],
      [[8, 10], "Roll 2x & Combine Results"]
    ]
  },
  {
    key: "scifi-station-type",
    name: "SN Sci-Fi - Station Type",
    formula: "1d6",
    results: [
      [1, "Energy/Research"],
      [2, "Industrial/Mining"],
      [3, "Hab-Rings/Food"],
      [4, "Military/Defense"],
      [5, "Leisure/Cultural"],
      [6, "Xeno/Unknown"]
    ]
  },
  {
    key: "scifi-planet-inhabited",
    name: "SN Sci-Fi - Planet Inhabited?",
    formula: "1d6",
    results: [
      [[1, 3], "Inhabited"],
      [[4, 6], "Uninhabited"]
    ]
  },
  {
    key: "scifi-space-travel-event",
    name: "SN Sci-Fi - Space Travel Event",
    formula: "1d6",
    results: [
      [1, "Space Encounter"],
      [[2, 5], "Nothing Found"],
      [6, "Space Discovery"]
    ]
  },
  {
    key: "scifi-space-discovery",
    name: "SN Sci-Fi - Space Discovery",
    formula: "1d6",
    results: [
      [1, "Distress Signal"],
      [2, "Derelict Ship/Station"],
      [3, "Mysterious Debris"],
      [4, "Hidden/Secret Structure"],
      [5, "Exotic Resources"],
      [6, "UNKNOWN (Roll Oracles)"]
    ]
  },
  {
    key: "scifi-space-encounter",
    name: "SN Sci-Fi - Space Encounter",
    formula: "1d10",
    results: [
      [[1, 7], "Single Ship"],
      [8, "Fleet of Ships (2d6)"],
      [9, "Huge Space Beasts"],
      [10, "Stellar Leviathan"]
    ]
  },
  {
    key: "scifi-ship-type",
    name: "SN Sci-Fi - Encounter Ship Type",
    formula: "1d10",
    results: [
      [[1, 4], "Fighter"],
      [[5, 7], "Cruiser"],
      [[8, 9], "Destroyer"],
      [10, "Battleship"]
    ]
  },
  {
    key: "scifi-encounter-distance",
    name: "SN Sci-Fi - Encounter Distance (Outdoor)",
    formula: "1d6",
    results: [
      [[1, 3], "1d6x10 ft"],
      [[4, 5], "2d6x20 ft"],
      [6, "1d6x100 ft"]
    ]
  },
  {
    key: "scifi-planetcrawl-weather",
    name: "SN Sci-Fi - Weather (Planetside)",
    formula: "1d8",
    results: [
      [1, "Terrible: -2 Lost, No Travel"],
      [[2, 3], "Bad: -1 to Getting Lost"],
      [[4, 7], "Neutral: No Changes"],
      [8, "Good: +1 to Getting Lost"]
    ]
  },
  {
    key: "scifi-planetcrawl-lost",
    name: "SN Sci-Fi - Getting Lost",
    formula: "1d6",
    results: [
      [[1, 2], "Lost! (No Travel)"],
      [[3, 6], "Not Lost"]
    ]
  },
  {
    key: "scifi-planetcrawl-discovery",
    name: "SN Sci-Fi - Planetcrawl Discovery",
    formula: "1d6",
    results: [
      [1, "Encounter"],
      [[2, 4], "Nothing"],
      [[5, 6], "Roll Feature"]
    ]
  },
  {
    key: "scifi-planetcrawl-night-encounter",
    name: "SN Sci-Fi - Night Encounter",
    formula: "1d6",
    results: [
      [1, "Encounter"],
      [[2, 6], "Nothing Happens"]
    ]
  },
  {
    key: "scifi-planetcrawl-forage",
    name: "SN Sci-Fi - Forage (Earth-Like/Habitable)",
    formula: "1d6",
    results: [
      [1, "Nothing Found"],
      [[2, 3], "+1 Rations"],
      [[4, 5], "+3 Rations"],
      [6, "+5 Rations"]
    ]
  },
  {
    key: "scifi-feature-jungle-swamp",
    name: "SN Sci-Fi - Planet Features: Jungle/Swamp",
    formula: "1d10",
    results: [
      [1, "Wildflowers"], [2, "Waterfall"], [3, "Creeping Vines"], [4, "Flowing River"],
      [5, "Poisonous Plants"], [6, "Hidden Glade"], [7, "Insect Hives"], [8, "Beast Lair"],
      [9, "Caverns"], [10, "Ruins"]
    ]
  },
  {
    key: "scifi-feature-ice-frozen",
    name: "SN Sci-Fi - Planet Features: Ice/Frozen",
    formula: "1d10",
    results: [
      [1, "Crevasse"], [2, "Glacier"], [3, "Mountains"], [4, "Ravines"], [5, "Frozen Lake"],
      [6, "Waterway"], [7, "Icespike Field"], [8, "Beast Lair"], [9, "Caverns"], [10, "Ruins"]
    ]
  },
  {
    key: "scifi-feature-earth-like",
    name: "SN Sci-Fi - Planet Features: Earth-Like",
    formula: "1d10",
    results: [
      [1, "Lush Valley"], [2, "Grasslands"], [3, "Forests"], [4, "Swamps"], [5, "River/Lake"],
      [6, "Mountains"], [7, "Hills"], [8, "Caverns"], [9, "Beast Lair"], [10, "Ruins"]
    ]
  },
  {
    key: "scifi-feature-volcanic",
    name: "SN Sci-Fi - Planet Features: Volcanic",
    formula: "1d10",
    results: [
      [1, "Lava Fields"], [2, "Magma Geysers"], [3, "Molten River"], [4, "Mineral Deposit"],
      [5, "Toxic Gases"], [6, "Waterway"], [7, "Mountains"], [8, "Caverns"], [9, "Beast Lair"], [10, "Ruins"]
    ]
  },
  {
    key: "scifi-feature-desert",
    name: "SN Sci-Fi - Planet Features: Desert",
    formula: "1d10",
    results: [
      [1, "Dry Riverbed"], [2, "Oasis"], [3, "Mesas"], [4, "Scrubland"], [5, "Ravines"],
      [6, "Valleys"], [7, "Crater"], [8, "Caverns"], [9, "Beast Lair"], [10, "Ruins"]
    ]
  },
  {
    key: "scifi-feature-barren",
    name: "SN Sci-Fi - Planet Features: Barren",
    formula: "1d10",
    results: [
      [1, "Huge Craters"], [2, "Sharp Rocks"], [3, "Tall Cliffs"], [4, "Rocky Hills"], [5, "Dusty Valley"],
      [6, "Wastelands"], [7, "Acid Pools"], [8, "Caverns"], [9, "Beast Lair"], [10, "Ruins"]
    ]
  },
  {
    key: "scifi-feature-structure-chance",
    name: "SN Sci-Fi - Inhabited Planet Feature: Structure?",
    formula: "1d6",
    results: [
      [[1, 3], "Structure instead of terrain feature"],
      [[4, 6], "Normal terrain feature"]
    ]
  },
  {
    key: "scifi-structure-primitive-low",
    name: "SN Sci-Fi - Structure: Primitive/Low Tech",
    formula: "1d12",
    results: [
      [[1, 3], "Village/Tribe"], [4, "Mines/Quarry"], [5, "Stone Circle"], [6, "Fort/Castle"],
      [7, "Burial/Crypt"], [8, "Shrine/Temple"], [9, "Farms/Herds"], [10, "Inn/Camp"],
      [11, "Statue/Art"], [12, "Ruins"]
    ]
  },
  {
    key: "scifi-structure-developed-plus",
    name: "SN Sci-Fi - Structure: Developed/Advanced/Ascendant",
    formula: "1d12",
    results: [
      [[1, 3], "City/Town"], [4, "Industrial/Factory"], [5, "Military Base"], [6, "Research/Science"],
      [7, "Mega-Structure"], [8, "Arcology/Harvesters"], [9, "Reactor/Energy"], [10, "Criminal Base"],
      [11, "Polluted/Wasteland"], [12, "Ruins"]
    ]
  },
  {
    key: "scifi-settlement-economy",
    name: "SN Sci-Fi - Habitation Economy",
    formula: "1d6",
    results: [
      [1, "Trade/Commerce"], [2, "Mining/Industry"], [3, "Agricultural"],
      [4, "Crafts/Goods"], [5, "Raiding/War"], [6, "Cultural/Faith"]
    ]
  },
  {
    key: "scifi-settlement-occupants",
    name: "SN Sci-Fi - Habitation Occupants",
    formula: "1d6",
    results: [
      [[1, 4], "Humans"],
      [[5, 6], "Sentient Aliens (Roll on Creature Maker Tables for details as needed)"]
    ]
  },
  {
    key: "scifi-settlement-leaders",
    name: "SN Sci-Fi - Habitation Leaders",
    formula: "1d6",
    results: [
      [1, "Oppressive"], [2, "Communal"], [3, "Oligarchy"],
      [4, "Theocracy"], [5, "Aristocracy"], [6, "Tribalism"]
    ]
  },
  {
    key: "scifi-settlement-aesthetics",
    name: "SN Sci-Fi - Habitation Aesthetics / Look",
    formula: "1d12",
    results: [
      [1, "Ornate"], [2, "Ancient"], [3, "Modest"], [4, "Struggling"], [5, "Fortified"], [6, "Crumbling"],
      [7, "Brutalist"], [8, "Organic"], [9, "Utilitarian"], [10, "Newly-built"], [11, "Geometric"], [12, "Labyrinthine"]
    ]
  },
  {
    key: "scifi-settlement-rumors",
    name: "SN Sci-Fi - Habitation Rumors",
    formula: "1d6",
    results: [
      [1, "Hidden Treasure"], [2, "Dangerous Tech"], [3, "Missing Leader"],
      [4, "Secret Cult"], [5, "Drought/Plague"], [6, "Incoming Attack"]
    ]
  },
  {
    key: "scifi-settlement-districts",
    name: "SN Sci-Fi - Habitation Districts",
    formula: "1d12",
    results: [
      [1, "Slums"], [2, "Common"], [3, "Artisan"], [4, "Scientific"], [5, "Market"], [6, "Affluent"],
      [7, "Transient"], [8, "Cultural"], [9, "Recreation"], [10, "Religious"], [11, "Education"], [12, "Fortified"]
    ]
  },
  {
    key: "scifi-general-encounter",
    name: "SN Sci-Fi - General Encounter",
    formula: "2d6",
    results: [
      [[2, 3], "Cultists/Priests"], [[4, 5], "Security/Soldiers"], [[6, 7], "Bandits/Pirates"],
      [[8, 9], "Commoners/Workers"], [[10, 11], "Merchants/Traders"], [12, "A Powerful Foe..."]
    ]
  },
  {
    key: "scifi-uninhabited-planet-encounter",
    name: "SN Sci-Fi - Uninhabited Planet Encounter",
    formula: "1d6",
    results: [
      [[1, 3], "Beasts & Animals"], [[4, 5], "Predator/Monster"], [6, "Anomalous Foe..."]
    ]
  },
  {
    key: "scifi-number-appearing",
    name: "SN Sci-Fi - Number Appearing",
    formula: "1d10",
    results: [
      [[1, 2], "Lone"], [[3, 6], "1d6"], [[7, 8], "1d6 + Elite"], [[9, 10], "2d6"]
    ]
  },
  {
    key: "scifi-human-alien-activity",
    name: "SN Sci-Fi - Human/Alien Activity",
    formula: "1d12",
    results: [
      [1, "Foraging / Crafting"], [2, "Injured / Hunting"], [3, "Trading / Building"], [4, "Guarding / Training"],
      [5, "Patrolling / Exploring"], [6, "Camping / Negotiating"], [7, "Lost / Celebrating"], [8, "Chasing / Escorting"],
      [9, "Spying / Mining"], [10, "Raiding / Scouting"], [11, "Battling / Destroying"], [12, "Searching / Seeking"]
    ]
  },
  {
    key: "scifi-reaction",
    name: "SN Sci-Fi - Reaction",
    formula: "2d6",
    results: [
      [2, "KILL!"], [3, "Hostile"], [[4, 6], "Unfriendly"], [[7, 8], "Neutral"],
      [[9, 10], "Favorable"], [11, "Friendly"], [12, "Actively Helpful"]
    ]
  },
  {
    key: "scifi-targets",
    name: "SN Sci-Fi - Encounter Targets",
    formula: "1d10",
    results: [
      [[1, 5], "Closest"], [[6, 7], "Strongest"], [[8, 9], "Weakest"], [10, "Strategic"]
    ]
  },
  {
    key: "scifi-actions",
    name: "SN Sci-Fi - Encounter Actions",
    formula: "1d12",
    results: [
      [[1, 5], "Move & Attack"], [[6, 8], "Special Abilities"], [[9, 10], "Defensive"], [[11, 12], "Reckless"]
    ]
  }
];
