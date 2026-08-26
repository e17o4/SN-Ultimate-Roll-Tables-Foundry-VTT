export const FANTASY_CHARACTER_TABLES = [
  {
    key: "fantasy-monster-color",
    name: "SN Fantasy - Monster Color",
    formula: "1d12",
    results: [
      [1, "Green"], [2, "Brown"], [3, "Red"], [4, "Grey"], [5, "Black"], [6, "White"],
      [7, "Orange"], [8, "Blue"], [9, "Purple"], [10, "Yellow"], [11, "Pale"], [12, "Iridescent"]
    ]
  },
  {
    key: "fantasy-monster-form",
    name: "SN Fantasy - Monster Form",
    formula: "1d12",
    results: [
      [1, "Reptilian"], [2, "Insectoid"], [3, "Skeletal"], [4, "Elemental"], [5, "Construct"], [6, "Plant-like"],
      [7, "Bestial"], [8, "Demonic"], [9, "Alien"], [10, "Aquatic"], [11, "Humanoid"], [12, "Mutant"]
    ]
  },
  {
    key: "fantasy-monster-traits",
    name: "SN Fantasy - Monster Traits",
    formula: "1d12",
    results: [
      [1, "Armored: +1 AC or AR"], [2, "Spiked: d6 dmg on touch"], [3, "Hiding: Adv to Stealth"],
      [4, "Magical: +d6 Arcane dmg"], [5, "Anti-Magic Field"], [6, "Very Fast: Always moves first"],
      [7, "Winged: Ignores terrain"], [8, "Vicious: Extra Damage (+d6)"], [9, "Telepathic/Telekinetic"],
      [10, "Multi-Armed: Extra Attacks"], [11, "Shapeshifting: +1 AC/DC"], [12, "Healing: d6 HP self/ally"]
    ]
  },
  {
    key: "fantasy-monster-abilities",
    name: "SN Fantasy - Monster Abilities",
    formula: "1d12",
    results: [
      [1, "Blast: Area of effect attack"], [2, "Long-Ranged Attacks"], [3, "Massive: Knocks foes over"],
      [4, "Teleport: To escape/fight"], [5, "Summons or Calls Allies"], [6, "Charge: +d6 dmg after"],
      [7, "Invisibility: d6 rounds"], [8, "Throws: Objects, foes, etc"], [9, "Bloodsucking: Restores HP"],
      [10, "Freezing/Burning Breath"], [11, "Snaring: Save or trapped"], [12, "Toxic: Paralyzes foes on atk"]
    ]
  },
  {
    key: "fantasy-monster-weakness",
    name: "SN Fantasy - Monster Weakness",
    formula: "1d12",
    results: [
      [1, "Flame"], [2, "Water"], [3, "Cold"], [4, "Electric"], [5, "Slow"], [6, "Light"],
      [7, "Darkness"], [8, "Magic"], [9, "Dumb"], [10, "Sound"], [11, "Fearful"], [12, "Holy/Unholy"]
    ]
  },
  {
    key: "fantasy-monster-behavior",
    name: "SN Fantasy - Monster Behavior",
    formula: "1d12",
    results: [
      [1, "Aggressive"], [2, "Ambush"], [3, "Territorial"], [4, "Pack Tactics"], [5, "Lone Wolf"], [6, "Opportunistic"],
      [7, "Cowardly"], [8, "Stealthy"], [9, "Protective"], [10, "Frenzied"], [11, "Intelligent"], [12, "Intelligent"]
    ]
  },
  {
    key: "fantasy-npc-looks",
    name: "SN Fantasy - NPC Looks",
    formula: "1d12",
    results: [
      [1, "Athletic"], [2, "Short"], [3, "Scarred"], [4, "Plain"], [5, "Old/Frail"], [6, "Stylish"],
      [7, "Shabby"], [8, "Heavyset"], [9, "Rugged"], [10, "Lanky"], [11, "Exotic"], [12, "Youthful"]
    ]
  },
  {
    key: "fantasy-npc-personality",
    name: "SN Fantasy - NPC Personality",
    formula: "1d12",
    results: [
      [1, "Ambitious"], [2, "Vengeful"], [3, "Serene"], [4, "Lazy"], [5, "Merciful"], [6, "Paranoid"],
      [7, "Disciplined"], [8, "Nervous"], [9, "Angry"], [10, "Empathic"], [11, "Bitter"], [12, "Loyal"]
    ]
  },
  {
    key: "fantasy-npc-role",
    name: "SN Fantasy - NPC Role",
    formula: "1d12",
    results: [
      [1, "Merchant"], [2, "Soldier"], [3, "Scholar"], [4, "Thief"], [5, "Noble"], [6, "Priest"],
      [7, "Commoner"], [8, "Sailor"], [9, "Spy"], [10, "Explorer"], [11, "Mage"], [12, "Leader"]
    ]
  },
  {
    key: "fantasy-npc-wants",
    name: "SN Fantasy - NPC Wants",
    formula: "1d12",
    results: [
      [1, "Wealth"], [2, "Influence"], [3, "Help/Aid"], [4, "Territory"], [5, "Info/Lore"], [6, "Resources"],
      [7, "Directions"], [8, "Survival"], [9, "Power"], [10, "Domain"], [11, "Item"], [12, "Person"]
    ]
  },
  {
    key: "fantasy-npc-archetype",
    name: "SN Fantasy - NPC Archetype",
    formula: "1d12",
    results: [
      [1, "Snake"], [2, "Spider"], [3, "Hound"], [4, "Vulture"], [5, "Feline"], [6, "Bear"],
      [7, "Turtle"], [8, "Bull"], [9, "Shark"], [10, "Rat"], [11, "Eagle"], [12, "Jackal"]
    ]
  },
  {
    key: "fantasy-conversation-topic",
    name: "SN Fantasy - Conversation Topic",
    formula: "1d20",
    results: [
      [1, "Local News"], [2, "Battles"], [3, "Commerce"], [4, "Discovery"], [5, "Arcane"],
      [6, "Political"], [7, "Festivals"], [8, "Myths"], [9, "Traditions"], [10, "Religion"],
      [11, "Weather"], [12, "Heroics"], [13, "Monsters"], [14, "Nobility"], [15, "Factions"],
      [16, "Personal"], [17, "Food & Drink"], [18, "Craftsmanship"], [19, "Superstitions"], [20, "Art & Music"]
    ]
  },
  {
    key: "fantasy-quest-size",
    name: "SN Fantasy - Quest Die Size",
    formula: "1d8",
    results: [
      [[1, 2], "Short/Simple: d6"], [[3, 5], "Medium/Difficult: d8"], [[6, 7], "Long/Complex: d12"], [8, "Epic/Legendary: d20"]
    ]
  },
  {
    key: "fantasy-clues",
    name: "SN Fantasy - Clues",
    formula: "1d12",
    results: [
      [1, "Mysterious Object"], [2, "Whispered Words"], [3, "Strange Markings"], [4, "Fleeting Shadow"],
      [5, "Scrap of a Note"], [6, "Unusual Sight"], [7, "Hidden Compartment"], [8, "Odd Footprints"],
      [9, "Eavesdropped Secret"], [10, "Tattered Map"], [11, "Broken Lock"], [12, "Unsent Message"]
    ]
  },
  {
    key: "fantasy-quest-objective",
    name: "SN Fantasy - Quest Objective",
    formula: "1d10",
    results: [
      [1, "Aid"], [2, "Sabotage"], [3, "Deliver"], [4, "Investigate"], [5, "Destroy"],
      [6, "Steal"], [7, "Disrupt"], [8, "Explore"], [9, "Transport"], [10, "Claim"]
    ]
  },
  {
    key: "fantasy-quest-description",
    name: "SN Fantasy - Quest Description",
    formula: "1d10",
    results: [
      [1, "Sacred"], [2, "Hidden"], [3, "Forbidden"], [4, "Valuable"], [5, "Stolen"],
      [6, "Cursed"], [7, "Arcane"], [8, "Secret"], [9, "Abandoned"], [10, "Ancient"]
    ]
  },
  {
    key: "fantasy-quest-subject",
    name: "SN Fantasy - Quest Subject",
    formula: "1d12",
    results: [
      [1, "NPC"], [2, "Artifact"], [3, "Creature"], [4, "Resource"], [5, "Magic Item"], [6, "Map/Info"],
      [7, "Weapon"], [8, "Obstacle"], [9, "Book/Scroll"], [10, "Treasure"], [11, "Fortification"], [12, "Settlement"]
    ]
  },
  {
    key: "fantasy-quest-location",
    name: "SN Fantasy - Quest Location",
    formula: "1d10",
    results: [
      [1, "Home/Lair"], [2, "Frontier"], [3, "Battlefield"], [4, "Roll Terrain"], [5, "Wasteland"],
      [6, "Palace"], [7, "Caverns"], [8, "Ruins"], [9, "Settlement"], [10, "Fortification"]
    ]
  },
  {
    key: "fantasy-treasure",
    name: "SN Fantasy - Treasure Table",
    formula: "2d6",
    results: [
      [[2, 3], "Poor | 2d6 Coins"], [[4, 5], "Mediocre | 3d6 Coins"], [[6, 7], "Decent | 1d6x10 Coins"],
      [[8, 9], "Great! | 3d6x10 Coins"], [10, "1d6 Gems | #x100 Coins"], [11, "Scroll d6 Lv | Lv x100 Coins"],
      [12, "Masterwork +1 | 2d6x100 Coins"]
    ]
  }
];
