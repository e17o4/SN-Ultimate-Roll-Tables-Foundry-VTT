export const FANTASY_DUNGEON_TABLES = [
  {
    key: "fantasy-dungeon-type",
    name: "SN Fantasy - Dungeon Type",
    formula: "1d6",
    results: [
      [1, "Crypt/Tombs"], [2, "Dungeon/Ruins"], [3, "Temple/Church"],
      [4, "Lairs/Caverns"], [5, "Castles/Forts"], [6, "Anomaly/Magic"]
    ]
  },
  {
    key: "fantasy-dungeon-start",
    name: "SN Fantasy - Dungeon Start",
    formula: "1d6",
    results: [
      [[1, 3], "Passage"], [[4, 6], "Area"]
    ]
  },
  {
    key: "fantasy-dungeon-levels",
    name: "SN Fantasy - Dungeon Levels",
    formula: "1d6",
    results: [
      [[1, 3], "1 level"], [[4, 5], "2 levels"], [6, "3 levels"]
    ]
  },
  {
    key: "fantasy-area-contents",
    name: "SN Fantasy - Dungeon Area Contents",
    formula: "1d6",
    results: [
      [[1, 2], "Empty"], [[3, 4], "Encounter"], [5, "Trap or Hazard"], [6, "Special"]
    ]
  },
  {
    key: "fantasy-special-contents",
    name: "SN Fantasy - Dungeon Special Contents",
    formula: "1d6",
    results: [
      [[1, 3], "Feature/Detail"], [[4, 5], "NPC(s)"], [6, "Enigma...???"]
    ]
  },
  {
    key: "fantasy-feature-crypt",
    name: "SN Fantasy - Dungeon Features: Crypt/Tombs",
    formula: "1d10",
    results: [
      [1, "Graven Art"], [2, "Coffins/Burials"], [3, "Mass Grave"], [4, "Funerary Urns"],
      [5, "Abnormally Cold"], [6, "Haunted/Cursed"], [7, "Offering Shrine"], [8, "Catacombs"],
      [9, "Stone Statues"], [10, "Desecrated"]
    ]
  },
  {
    key: "fantasy-feature-ruins",
    name: "SN Fantasy - Dungeon Features: Dungeon/Ruins",
    formula: "1d10",
    results: [
      [1, "Moving Walls"], [2, "Dead Occupants"], [3, "Dungeon Cells"], [4, "Dripping Water"],
      [5, "Raised Walkways"], [6, "Strange Statues"], [7, "Furniture"], [8, "Triggered Trap"],
      [9, "Hanging Chains"], [10, "Debris Filled"]
    ]
  },
  {
    key: "fantasy-feature-temple",
    name: "SN Fantasy - Dungeon Features: Temple/Church",
    formula: "1d10",
    results: [
      [1, "Study/Library"], [2, "Small Altar"], [3, "Gathering Place"], [4, "Monk Quarters"],
      [5, "Sacred Statues"], [6, "Incense/Fire"], [7, "Chanting/Prayer"], [8, "Cistern/Pool"],
      [9, "Ritual Chamber"], [10, "Mystical"]
    ]
  },
  {
    key: "fantasy-feature-lairs",
    name: "SN Fantasy - Dungeon Features: Lairs/Caverns",
    formula: "1d10",
    results: [
      [1, "Lava Geysers"], [2, "Radiant Geodes"], [3, "Beast Tracks"], [4, "Old Bones"],
      [5, "Massive Fissure"], [6, "Fungal Growth"], [7, "Dark Fog"], [8, "Sharp Stones"],
      [9, "Nest/Clutch"], [10, "Murky Waters"]
    ]
  },
  {
    key: "fantasy-feature-castle",
    name: "SN Fantasy - Dungeon Features: Castles/Forts",
    formula: "1d10",
    results: [
      [1, "Stone Debris"], [2, "Cracked Floor"], [3, "Vent. Shafts"], [4, "Kitchen/Food Hall"],
      [5, "Armory/Vault"], [6, "Garrison/Tower"], [7, "Workshop/Forge"], [8, "Supply Stores"],
      [9, "Torture/Prison"], [10, "Fortified Zone"]
    ]
  },
  {
    key: "fantasy-feature-anomaly",
    name: "SN Fantasy - Dungeon Features: Anomaly/Magic",
    formula: "1d10",
    results: [
      [1, "Floating Crystals"], [2, "Ancient Runes"], [3, "Strange Items"], [4, "Enchanted Doors"],
      [5, "Open Portal"], [6, "Warped Physics"], [7, "Alchemy/Lab"], [8, "Library/Study"],
      [9, "Wild Magic"], [10, "UNKNOWN...?"]
    ]
  },
  {
    key: "fantasy-trap-type",
    name: "SN Fantasy - Trap Type",
    formula: "1d12",
    results: [
      [1, "Swinging Blade"], [2, "Poison Needle"], [3, "Hidden Pitfall"], [4, "Spiked Floor"],
      [5, "Crossbow Trap"], [6, "Collapsing Ceiling"], [7, "Fire/Frost Jet"], [8, "Barbed Net Trap"],
      [9, "Scything Blades"], [10, "Toxic Gas"], [11, "Crushing Walls"], [12, "Magical Runes"]
    ]
  },
  {
    key: "fantasy-trap-trigger",
    name: "SN Fantasy - Trap Trigger",
    formula: "1d12",
    results: [
      [1, "Pressure"], [2, "Proximity"], [3, "Magical"], [4, "Tripwires"],
      [5, "Movement"], [6, "Spellcasting"], [7, "Levers"], [8, "Sounds"],
      [9, "Object"], [10, "Touch"], [11, "Object"], [12, "Touch"]
    ]
  },
  {
    key: "fantasy-trap-damage-effect",
    name: "SN Fantasy - Trap Damage & Effect",
    formula: "1d12",
    results: [
      [[1, 3], "1d6 damage; no additional effect"],
      [4, "1d6* damage; Burning"],
      [5, "2d6 damage; Confuse"],
      [6, "2d6 damage; Poison"],
      [7, "2d6* damage; Blind"],
      [8, "3d6 damage; Panic"],
      [9, "3d6 damage; Petrify"],
      [10, "3d6* damage; Sleep"],
      [11, "4d6* damage; Disease"],
      [12, "Death; Paralyze"]
    ]
  },
  {
    key: "fantasy-hazard-type",
    name: "SN Fantasy - Hazard Type",
    formula: "1d6",
    results: [
      [[1, 2], "Obstacle"], [[3, 4], "Weakening"], [[5, 6], "Damaging"]
    ]
  },
  {
    key: "fantasy-hazard-obstacle",
    name: "SN Fantasy - Hazards: Obstacle",
    formula: "1d10",
    results: [
      [1, "Quicksand"], [2, "Cobwebs/Sticky"], [3, "Trip Wires/Vines"], [4, "Water flow"],
      [5, "Large Debris"], [6, "Spiked Floors"], [7, "Entrapping Terrain"], [8, "Collapsing Floor"],
      [9, "Maze-Like"], [10, "Tight Passages"]
    ]
  },
  {
    key: "fantasy-hazard-weakening",
    name: "SN Fantasy - Hazards: Weakening",
    formula: "1d10",
    results: [
      [1, "Magical Darkness"], [2, "Poisonous Foliage"], [3, "Dripping Acid"], [4, "Horrible Odors"],
      [5, "Antimagic Zone"], [6, "Deafening Sound"], [7, "Large Temp. Shift"], [8, "Mental Exhaustion"],
      [9, "Distorted Visuals"], [10, "Electrified Air"]
    ]
  },
  {
    key: "fantasy-hazard-damaging",
    name: "SN Fantasy - Hazards: Damaging",
    formula: "1d10",
    results: [
      [1, "Sudden Flood"], [2, "Falling Rocks"], [3, "Sudden Pitfall"], [4, "Poison Spores"],
      [5, "Unstable Pillars"], [6, "Choking Dust"], [7, "Exploding Gas"], [8, "Toxic Pools"],
      [9, "Fire/Lava Bursts"], [10, "Unstable Magic"]
    ]
  },
  {
    key: "fantasy-faction-type",
    name: "SN Fantasy - Dungeon Faction Type",
    formula: "1d6",
    results: [
      [1, "Political"], [2, "Economic"], [3, "Law/Order"], [4, "Chaos"], [5, "Religious"], [6, "Criminal"]
    ]
  },
  {
    key: "fantasy-faction-wants",
    name: "SN Fantasy - Dungeon Faction Wants",
    formula: "1d6",
    results: [
      [1, "Power"], [2, "Relics"], [3, "Territory"], [4, "Survival"], [5, "Info"], [6, "Wealth"]
    ]
  },
  {
    key: "fantasy-faction-resources",
    name: "SN Fantasy - Dungeon Faction Resources",
    formula: "1d6",
    results: [
      [1, "Minions"], [2, "Treasure"], [3, "Secrets"], [4, "Sorcery"], [5, "Muscle"], [6, "Shadows"]
    ]
  },
  {
    key: "fantasy-faction-obstacles",
    name: "SN Fantasy - Dungeon Faction Obstacles",
    formula: "1d6",
    results: [
      [1, "Monsters"], [2, "Rivalry"], [3, "Disaster"], [4, "Scarcity"], [5, "Violence"], [6, "Time"]
    ]
  },
  {
    key: "fantasy-faction-actions",
    name: "SN Fantasy - Dungeon Faction Actions",
    formula: "1d6",
    results: [
      [1, "Attack"], [2, "Steal"], [3, "Infiltrate"], [4, "Acquire"], [5, "Destroy"], [6, "Diplomacy"]
    ]
  }
];
