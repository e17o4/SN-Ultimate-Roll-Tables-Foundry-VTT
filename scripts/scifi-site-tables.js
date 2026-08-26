export const SCIFI_SITE_TABLES = [
  {
    key: "scifi-site-start",
    name: "SN Sci-Fi - Site START: Passage or Area",
    formula: "1d6",
    results: [
      [[1, 2], "Passage"],
      [[3, 6], "Area"]
    ]
  },
  {
    key: "scifi-site-levels",
    name: "SN Sci-Fi - Site Levels",
    formula: "1d6",
    results: [
      [[1, 4], "1 Level"],
      [5, "2 Levels"],
      [6, "3 Levels"]
    ]
  },
  {
    key: "scifi-site-contents",
    name: "SN Sci-Fi - Site Area Contents",
    formula: "1d6",
    results: [
      [[1, 2], "Empty"],
      [[3, 4], "Encounter"],
      [5, "Trap or Hazard"],
      [6, "Special (Roll Special Contents)"]
    ]
  },
  {
    key: "scifi-site-special-contents",
    name: "SN Sci-Fi - Site Special Contents",
    formula: "1d6",
    results: [
      [[1, 3], "Hidden Area"],
      [[4, 5], "NPC(s)"],
      [6, "Enigma...???"]
    ]
  },
  {
    key: "scifi-site-feature-ship-station",
    name: "SN Sci-Fi - Site Features: Ship/Station",
    formula: "1d10",
    results: [
      [1, "Control/Comms"], [2, "Bridge/Piloting"], [3, "Life Support"], [4, "Engine/Power"],
      [5, "Cargo Bay"], [6, "Medbay"], [7, "Habitat/Bunks"], [8, "Vents/Pipes"],
      [9, "Computer Sys."], [10, "Escape Pods"]
    ]
  },
  {
    key: "scifi-site-feature-residential-city",
    name: "SN Sci-Fi - Site Features: Residential/City",
    formula: "1d10",
    results: [
      [1, "Kitchens"], [2, "Shop/Store"], [3, "Beds/Bunks"], [4, "Workshop/Studio"],
      [5, "Bathrooms"], [6, "Pipes/Vents"], [7, "Medical Station"], [8, "Communications"],
      [9, "Barracks/Police"], [10, "Education/School"]
    ]
  },
  {
    key: "scifi-site-feature-research-lab",
    name: "SN Sci-Fi - Site Features: Research/Lab",
    formula: "1d10",
    results: [
      [1, "Lab Equipment"], [2, "Chemicals/Gas"], [3, "Freezer/Heater"], [4, "Sterile/Samples"],
      [5, "Sensors/Comms"], [6, "Power/Electric"], [7, "Computer System"], [8, "Repair/Medical"],
      [9, "Vents/Pipes"], [10, "Zero-G Zone"]
    ]
  },
  {
    key: "scifi-site-feature-lairs-caverns",
    name: "SN Sci-Fi - Site Features: Lairs/Caverns",
    formula: "1d10",
    results: [
      [1, "Geysers/Lava"], [2, "Radiant Geodes"], [3, "Beast Tracks"], [4, "Old Bones"],
      [5, "Massive Fissure"], [6, "Organic Growths"], [7, "Dark Fog"], [8, "Deadly Terrain"],
      [9, "Nest/Clutch"], [10, "Murky Waters"]
    ]
  },
  {
    key: "scifi-site-feature-industry-factory",
    name: "SN Sci-Fi - Site Features: Industry/Factory",
    formula: "1d10",
    results: [
      [1, "Huge Machinery"], [2, "Raw Materials"], [3, "Storage/Cargo"], [4, "Living Quarters"],
      [5, "Control/Comms"], [6, "Vents/Pipes"], [7, "Power/Electric"], [8, "Data Terminal"],
      [9, "Toxic/Polluted"], [10, "Narrow Corridors"]
    ]
  },
  {
    key: "scifi-site-feature-military-base",
    name: "SN Sci-Fi - Site Features: Military Base/Fort",
    formula: "1d10",
    results: [
      [1, "Fortified Zone"], [2, "Vault/Armory"], [3, "Engineering"], [4, "Barracks/Bunks"],
      [5, "Weapon Systems"], [6, "Life Support"], [7, "Scanner/Comms"], [8, "Prison Cells/Jail"],
      [9, "Cargo Bay"], [10, "Infirmary"]
    ]
  },
  {
    key: "scifi-trap-type-effect",
    name: "SN Sci-Fi - Trap Type & Effect",
    formula: "1d8",
    results: [
      [[1, 2], "Explosive (AGI): Deals Double Trap DMG"],
      [3, "Alerting (INT): Alerts nearby Foes (Roll Encounter)"],
      [4, "Psionic (INT): Mental Fog, Confusion, Sleep, etc."],
      [5, "Structural (AGI): Enclosing Walls, Rising water, etc."],
      [6, "Mechanical (AGI): Turrets, Lasers, Drones, etc."],
      [7, "Capturing (AGI): Nets, Darts, Doors Locking, etc."],
      [8, "Chemical/Hazardous (STR): Gas, Pathogens, Acid, etc."]
    ]
  },
  {
    key: "scifi-trap-trigger",
    name: "SN Sci-Fi - Trap Trigger Type",
    formula: "1d6",
    results: [
      [1, "Proximity"], [2, "Pressure"], [3, "Movement"],
      [4, "Touch/Weight"], [5, "Object/Item"], [6, "Sound/Light"]
    ]
  },
  {
    key: "scifi-trap-damage",
    name: "SN Sci-Fi - Trap/Hazard Damage",
    formula: "1d12",
    results: [
      [[1, 4], "Effect Only"],
      [[5, 8], "1d6 DMG"],
      [[9, 10], "2d6 DMG"],
      [11, "3d6 DMG"],
      [12, "DEATH!: Save to avoid"]
    ]
  },
  {
    key: "scifi-trap-malfunction",
    name: "SN Sci-Fi - Trap Malfunction Check",
    formula: "1d6",
    results: [
      [1, "Malfunctions"],
      [[2, 6], "Functions normally"]
    ]
  },
  {
    key: "scifi-abandoned-trap-malfunction",
    name: "SN Sci-Fi - Abandoned Trap Malfunction Check",
    formula: "1d6",
    results: [
      [[1, 3], "Malfunctions"],
      [[4, 6], "Functions normally"]
    ]
  },
  {
    key: "scifi-hazard-type",
    name: "SN Sci-Fi - Natural Hazard Type",
    formula: "1d6",
    results: [
      [[1, 2], "Obstacle"],
      [[3, 4], "Weakening"],
      [[5, 6], "Damaging"]
    ]
  },
  {
    key: "scifi-hazard-obstacle",
    name: "SN Sci-Fi - Hazard Effects: Obstacle",
    formula: "1d10",
    results: [
      [1, "Quicksand"], [2, "Cobwebs/Sticky"], [3, "Trip Wires/Vines"], [4, "Water flow"],
      [5, "Large Debris"], [6, "Broken Paths"], [7, "Entrapping Terrain"], [8, "Collapsing Floor"],
      [9, "Maze-Like"], [10, "Tight Passages"]
    ]
  },
  {
    key: "scifi-hazard-weakening",
    name: "SN Sci-Fi - Hazard Effects: Weakening",
    formula: "1d10",
    results: [
      [1, "Strange Darkness"], [2, "Poisonous Foliage"], [3, "Dripping Acid"], [4, "Horrible Odors"],
      [5, "Antipsionic Zone"], [6, "Deafening Sound"], [7, "Large Temp. Shift"], [8, "Mental Exhaustion"],
      [9, "Distorted Visuals"], [10, "Electrified Air"]
    ]
  },
  {
    key: "scifi-hazard-damaging",
    name: "SN Sci-Fi - Hazard Effects: Damaging",
    formula: "1d10",
    results: [
      [1, "Sudden Flood"], [2, "Falling Rocks"], [3, "Sudden Pitfall"], [4, "Poison Spores"],
      [5, "Unstable Pillars"], [6, "Choking Dust"], [7, "Exploding Gas"], [8, "Toxic Pools"],
      [9, "Fire/Lava Bursts"], [10, "Unstable Psionics"]
    ]
  },
  {
    key: "scifi-site-faction-type",
    name: "SN Sci-Fi - Site Faction Type",
    formula: "1d6",
    results: [
      [1, "Political"], [2, "Economic"], [3, "Law/Order"],
      [4, "Chaos"], [5, "Religious"], [6, "Criminal"]
    ]
  },
  {
    key: "scifi-site-faction-wants",
    name: "SN Sci-Fi - Site Faction Wants",
    formula: "1d6",
    results: [
      [1, "Power"], [2, "Relics"], [3, "Territory"], [4, "Survival"], [5, "Info"], [6, "Wealth"]
    ]
  },
  {
    key: "scifi-site-faction-resource",
    name: "SN Sci-Fi - Site Faction Resource",
    formula: "1d6",
    results: [
      [1, "Minions"], [2, "Treasure"], [3, "Secrets"], [4, "Psionics"], [5, "Muscle"], [6, "Shadows"]
    ]
  },
  {
    key: "scifi-site-faction-obstacle",
    name: "SN Sci-Fi - Site Faction Obstacle",
    formula: "1d6",
    results: [
      [1, "Monsters"], [2, "Rivalry"], [3, "Disaster"], [4, "Scarcity"], [5, "Violence"], [6, "Time"]
    ]
  },
  {
    key: "scifi-site-faction-actions",
    name: "SN Sci-Fi - Site Faction Actions",
    formula: "1d6",
    results: [
      [1, "Attack"], [2, "Steal"], [3, "Infiltrate"], [4, "Acquire"], [5, "Destroy"], [6, "Diplomacy"]
    ]
  }
];
