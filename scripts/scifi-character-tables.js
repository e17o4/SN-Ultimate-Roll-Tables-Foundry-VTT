export const SCIFI_CHARACTER_TABLES = [
  {
    key: "scifi-alien-level-tier",
    name: "SN Sci-Fi - Alien/Creature Level Tier",
    formula: "2d6",
    results: [
      [[2, 9], "Low Levels 1-3 (roll 1d6: 1-3=1, 4-5=2, 6=3)"],
      [[10, 12], "Mid Levels 4-6 (roll 1d6: 1-3=4, 4-5=5, 6=6)"],
      [13, "High Levels 7-9 (roll 1d6: 1-3=7, 4-5=8, 6=9)"],
      [14, "Legendary Level 10+"]
    ]
  },
  {
    key: "scifi-alien-color",
    name: "SN Sci-Fi - Alien Color",
    formula: "1d12",
    results: [
      [1, "Green"], [2, "Brown"], [3, "Red"], [4, "Grey"], [5, "Black"], [6, "White"],
      [7, "Orange"], [8, "Blue"], [9, "Purple"], [10, "Yellow"], [11, "Glowing"], [12, "Iridescent"]
    ]
  },
  {
    key: "scifi-alien-form",
    name: "SN Sci-Fi - Alien Form",
    formula: "1d12",
    results: [
      [1, "Reptilian"], [2, "Insectoid"], [3, "Robotic"], [4, "Elemental"], [5, "Construct"], [6, "Plant-like"],
      [7, "Bestial"], [8, "Demonic"], [9, "Tentacled"], [10, "Aquatic"], [11, "Humanoid"], [12, "Mutant"]
    ]
  },
  {
    key: "scifi-alien-traits",
    name: "SN Sci-Fi - Alien Traits",
    formula: "1d12",
    results: [
      [1, "Armored: +1 AC or AR"], [2, "Spiked: d6 dmg on touch"], [3, "Hiding: Adv to Stealth"],
      [4, "Toxic: Paralyzes foes on atk"], [5, "Anti-Tech Field"], [6, "Very Fast: Always Moves first"],
      [7, "Winged: Ignores terrain"], [8, "Vicious: Extra Damage (+d6)"], [9, "Telepathic/Telekinetic"],
      [10, "Multi-Armed: Extra Attacks"], [11, "Shapeshifting: +1 AC/DC"], [12, "Healing: d6 HP self/ally"]
    ]
  },
  {
    key: "scifi-alien-abilities",
    name: "SN Sci-Fi - Alien Abilities",
    formula: "1d12",
    results: [
      [1, "Blast: Area of Effect attack"], [2, "Long-Ranged Attacks"], [3, "Massive: Knocks foes over"],
      [4, "Psionic: +d6 psychic dmg"], [5, "Teleport: To escape/fight"], [6, "Summons or Calls Allies"],
      [7, "Charge: +d6 dmg after"], [8, "Invisibility: d6 rounds"], [9, "Throws: Objects, foes, etc."],
      [10, "Bloodsucking: Restores HP"], [11, "Freezing/Burning Breath"], [12, "Snaring: Save or trapped"]
    ]
  },
  {
    key: "scifi-alien-weakness",
    name: "SN Sci-Fi - Alien Weakness",
    formula: "1d12",
    results: [
      [1, "Flame"], [2, "Water"], [3, "Cold"], [4, "Electric"], [5, "Slow"], [6, "Light"],
      [7, "Darkness"], [8, "Tech"], [9, "Dumb"], [10, "Sound"], [11, "Fearful"], [12, "Psionics"]
    ]
  },
  {
    key: "scifi-alien-behavior",
    name: "SN Sci-Fi - Alien Behavior",
    formula: "1d12",
    results: [
      [1, "Aggressive"], [2, "Ambush"], [3, "Territorial"], [4, "Pack"], [5, "Tactics"], [6, "Lone Wolf"],
      [7, "Opportunistic"], [8, "Cowardly"], [9, "Stealthy"], [10, "Protective"], [11, "Frenzied"], [12, "Intelligent"]
    ]
  },
  {
    key: "scifi-npc-looks",
    name: "SN Sci-Fi - NPC Looks",
    formula: "1d20",
    results: [
      [1, "Athletic"], [2, "Short"], [3, "Scarred"], [4, "Plain"], [5, "Old/Frail"], [6, "Stylish"], [7, "Shabby"], [8, "Heavyset"], [9, "Rugged"], [10, "Lanky"],
      [11, "Exotic"], [12, "Youthful"], [13, "Tattooed"], [14, "Muscular"], [15, "Graceful"], [16, "Bald"], [17, "Bearded"], [18, "Elegant"], [19, "Ugly"], [20, "Beautiful"]
    ]
  },
  {
    key: "scifi-npc-personality",
    name: "SN Sci-Fi - NPC Personality",
    formula: "1d20",
    results: [
      [1, "Ambitious"], [2, "Vengeful"], [3, "Serene"], [4, "Lazy"], [5, "Merciful"], [6, "Paranoid"], [7, "Disciplined"], [8, "Nervous"], [9, "Angry"], [10, "Empathetic"],
      [11, "Bitter"], [12, "Loyal"], [13, "Courageous"], [14, "Arrogant"], [15, "Curious"], [16, "Honest"], [17, "Reckless"], [18, "Patient"], [19, "Stubborn"], [20, "Charismatic"]
    ]
  },
  {
    key: "scifi-npc-role",
    name: "SN Sci-Fi - NPC Role",
    formula: "1d20",
    results: [
      [1, "Merchant"], [2, "Soldier"], [3, "Scientist"], [4, "Smuggler"], [5, "Corporate"], [6, "Priest"], [7, "Noble"], [8, "Worker"], [9, "Agent"], [10, "Explorer"],
      [11, "Psychic"], [12, "Leader"], [13, "Farmer"], [14, "Hunter"], [15, "Assassin"], [16, "Engineer"], [17, "Diplomat"], [18, "Healer"], [19, "Pilot"], [20, "Criminal"]
    ]
  },
  {
    key: "scifi-npc-wants",
    name: "SN Sci-Fi - NPC Wants",
    formula: "1d20",
    results: [
      [1, "Wealth"], [2, "Influence"], [3, "Help/Aid"], [4, "Territory"], [5, "Info/Lore"], [6, "Resources"], [7, "Directions"], [8, "Survival"], [9, "Power"], [10, "Domain"],
      [11, "Item"], [12, "Person"], [13, "Justice"], [14, "Freedom"], [15, "Chaos"], [16, "Trade"], [17, "Discovery"], [18, "Death"], [19, "Technology"], [20, "Secrets"]
    ]
  },
  {
    key: "scifi-npc-archetype",
    name: "SN Sci-Fi - NPC Archetype",
    formula: "1d20",
    results: [
      [1, "Snake"], [2, "Spider"], [3, "Hound"], [4, "Vulture"], [5, "Feline"], [6, "Bear"], [7, "Turtle"], [8, "Bull"], [9, "Shark"], [10, "Rat"],
      [11, "Eagle"], [12, "Jackal"], [13, "Wolf"], [14, "Raven"], [15, "Fox"], [16, "Owl"], [17, "Stag"], [18, "Dragon"], [19, "Rabbit"], [20, "Boar"]
    ]
  },
  {
    key: "scifi-conversation-topics",
    name: "SN Sci-Fi - Conversation Topics",
    formula: "1d20",
    results: [
      [1, "Local News"], [2, "Battles"], [3, "Commerce"], [4, "Discovery"], [5, "Leaders"], [6, "Political"], [7, "Festivals"], [8, "Crime"], [9, "Traditions"], [10, "Religion"],
      [11, "Weather"], [12, "Heroics"], [13, "Monsters"], [14, "Technology"], [15, "Factions"], [16, "Personal"], [17, "Food & Drink"], [18, "Craft/Trade"], [19, "Superstitions"], [20, "Art & Music"]
    ]
  },
  {
    key: "scifi-treasure",
    name: "SN Sci-Fi - Treasure Table",
    formula: "2d6",
    results: [
      [[2, 3], "Poor | 2d6 Creds"], [[4, 5], "Mediocre | 3d6 Creds"], [[6, 7], "Decent | 1d6x20 Creds"],
      [[8, 9], "Great! | 3d6x20 Creds"], [10, "1d6 Rare Gems | #x100 Creds"], [11, "Weapons/Gear | 2d6x20 Creds"],
      [12, "Masterwork +1 | 2d6x100 Creds"], [13, "Xeno Tech | 2d6x500 Creds"]
    ]
  }
];
