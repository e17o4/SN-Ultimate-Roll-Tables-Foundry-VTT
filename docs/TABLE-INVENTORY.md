# RollTable Inventory

This document maps the random tables and procedural generators from SilverNightingale's **Ultimate One Page RPG Toolkit 2.1** (Fantasy) and **Ultimate One-Page Solo RPG Toolkit: SCI-FI EDITION** into the Foundry module.

The guiding rule is: **share only genuinely shared material**. Genre-specific wording, probabilities, and table structure stay separate even when two tables are similar.

Static rules/reference charts such as weapon prices, armor stats, ship stat blocks, and the core 2d6 RPG rules are **not part of this RollTable module** unless they are directly needed by a random generator. Those mechanics belong in the separate game-system project.

## Planned Compendium Groups

- `SN Toolkit - Common`
- `SN Toolkit - Fantasy`
- `SN Toolkit - Sci-Fi`

## COMMON

These can be stored once and reused by both genre branches where the source content and probabilities are the same.

### Oracles
- Oracle — 1d6
- Change the Scene — 1d6
- Event Seeds — 1d6
- Likelihood handling for the Oracle (advantage/disadvantage style 2d6 selection)

### Settlement/Habitation
- Culture — d12
- Needs — 1d6
- Factions + Traits — d12
- Politics — 1d6
- Events — 1d6

### Delve Structure
- Chamber Shape — d6
- Passage Type — d6
- Opening State — d6

The Fantasy Dungeon and Sci-Fi Site generators use different START probabilities, level probabilities, special contents, and feature tables, so their master generators stay genre-specific even though these structural subtables are shared.

### Encounters / NPC support
- Beast Activity — shared where entries and probabilities match
- Name Generator — shared where the syllable table matches

## FANTASY

### Hexcrawl Terrain
- Terrain Generator — d12
- Sea Terrain — d12
- Feature vs Settlement selector — 1d6
- Plains Features — d10
- Hills/Barren Features — d10
- Forest/Jungle Features — d10
- Swamp/Marsh Features — d10
- Mountain Features — d10
- Desert Features — d10

### Fantasy Settlement Creation
- Settlement Type — 1d6
- Demi-Human Chance / Type
- Main Economy — 1d6
- Look
- Leadership
- Rumors
- Districts — d12
- Uses shared Culture, Needs, Factions + Traits, Politics, and Events tables

### Fantasy Hexcrawl Procedure Tables
- Weather (Land) — 1d8
- Weather (Seas) — 1d6
- Foraging — 1d6
- Foraging Bonus — 1d6
- Getting Lost — 1d6
- Discovery — 1d6
- Night Encounter — 1d6

### Fantasy Encounter Builder
- Encounter Type — d12
- Encounter Size — d12
- Reaction / Alignment — 2d6
- Humanoid Activity
- Beast Activity — shared table where applicable
- Encounter Identity — 2d6
- Strategy & Tactics — d12
- Set Target — 1d10
- Morale Check — 1d10

### Fantasy Dungeon Generator
- Dungeon Type — 1d6
- Dungeon START: Passage vs Area — 1d6
- Dungeon Levels — 1d6
- Area Contents — 1d6
- Special Contents — 1d6
- Uses shared Chamber Shape, Passage Type, and Opening State
- Treasure Check logic

### Fantasy Dungeon Features
- Crypt/Tombs Features — d10
- Dungeon/Ruins Features — d10
- Temple/Church Features — d10
- Lairs/Caverns Features — d10
- Castles/Forts Features — d10
- Anomaly/Magic Features — d10

### Fantasy Traps & Hazards
- Trap Type — d12
- Trap Trigger — d12
- Trap Damage — d12
- Trap Effect — d12
- Natural Hazard Type — d6
- Natural Hazard Effect — d10, routed by hazard type

### Fantasy Dungeon Factions
- Faction Type — d6
- Wants — d6
- Resources — d6
- Obstacles — d6
- Actions — d6

### Fantasy Oracle / Spark Tables
- Actions
- Descriptions
- Themes
- Nouns

These remain Fantasy-specific because the paired layouts and vocabulary differ from the Sci-Fi edition even where many words overlap.

### Fantasy Monster Maker
- Monster Level — 2d6
- Color — d12
- Form — d12
- Traits
- Abilities
- Weakness — d12
- Behavior — d12

The level/stat reference ladder is source-system mechanics and is not treated as a standalone RollTable unless the generator needs it for output.

### Solo Quests & Mysteries
- Quest Die Size — 1d8
- Clues — d12
- Quest Objective — d10
- Quest Description — d10
- Quest Subject — d12
- Quest Location — d10

### Fantasy NPC / Character Creator
- Looks — d12
- Personality — d12
- Role — d12
- Wants — d12
- Archetype — d12
- Conversation Topic — d20
- Uses shared Name Generator where applicable

### Fantasy Treasure
- Treasure Table — 2d6

Static weapon, armor, generic-item, spell, and character-rule charts are reserved for the separate game system.

## SCI-FI

### Star System Generator
- System Size — 1d6
- System POI — 1d6
- Anomaly — 1d6
- Star Type — 1d6
- System / Planet Tech Level — 1d8
- Planet Type — 1d10
- Station Type — 1d6
- Inhabited Planet chance

### Space Travel
- Space Travel Event — 1d6
- Space Discovery — 1d6
- Space Encounter — 1d10
- Ship Type — 1d10
- Encounter Distance — 1d6

Static ship stats, modules, combat rules, and fuel mechanics are reserved for the separate game system.

### Planetcrawl
- Weather (Planetside) — 1d8
- Getting Lost — 1d6
- Discovery — 1d6
- Night Encounter — 1d6
- Forage (Earth-Like/Habitable) — 1d6

### Planet Features
- Jungle/Swamp Features — d10
- Ice/Frozen Features — d10
- Earth-Like Features — d10
- Volcanic Features — d10
- Desert Features — d10
- Barren Features — d10
- Inhabited-Planet Structure chance
- Structures by Technology Level

### Sci-Fi Settlement / Habitation
- Economy — 1d6
- Occupants — 1d6
- Aesthetics / Look — d12
- Leaders — 1d6
- Rumors — 1d6
- Districts — d12
- Uses shared Culture, Needs, Factions + Traits, Politics, and Events tables

### Sci-Fi Site Generator
- Site START: Passage vs Area — 1d6
- Site Levels — 1d6
- Area Contents — 1d6
- Special Contents — 1d6
- Uses shared Chamber Shape, Passage Type, and Opening State
- Treasure Check logic

### Sci-Fi Site Features
- Ship/Station Features — d10
- Residential/City Features — d10
- Research/Lab Features — d10
- Lairs/Caverns Features — d10
- Industry/Factory Features — d10
- Military Base/Fort Features — d10

### Sci-Fi Traps & Hazards
- Trap Type / Effect — d8
- Trap Trigger — 1d6
- Trap/Hazard Damage — 1d12
- Natural Hazard Type — d6
- Natural Hazard Effect — d10, routed by hazard type
- Malfunction chance for abandoned sites

### Sci-Fi Site Factions
- Faction Type — d6
- Wants — d6
- Resources — d6
- Obstacles — d6
- Actions — d6

The Sci-Fi Resources table differs from Fantasy where Psionics replaces Sorcery, so it remains genre-specific.

### Sci-Fi Encounter Builder
- General Encounter — 2d6
- Uninhabited Planet Encounter — 1d6
- Number Appearing — 1d10
- Human/Alien Activity
- Beast Activity — shared table where applicable
- Reaction — 2d6
- Targets — d10
- Actions — d12

### Sci-Fi Oracle / Spark Tables
- Actions
- Descriptions
- Themes
- Nouns
- Techno-Generator — d4 + d12

These remain Sci-Fi-specific because the paired layouts and vocabulary differ from the Fantasy edition.

### Alien / Creature Maker
- Monster/Alien Level — 2d6
- Color — d12
- Form — d12
- Traits
- Abilities
- Weakness — d12
- Behavior — d12

The level/stat reference ladder is source-system mechanics and is not treated as a standalone RollTable unless the generator needs it for output.

### Sci-Fi NPC / Character Creator
- Looks — d20
- Personality — d20
- Role — d20
- Wants — d20
- Archetype — d20
- Conversation Topic — d20
- Uses shared Name Generator where applicable

### Sci-Fi Treasure
- Treasure Table — 2d6

Static weapons, armor, equipment prices, psionics, character rules, and ship rules are reserved for the separate game system.

## Generator Layer

The raw Foundry RollTables should remain individually usable. Higher-level generators will call them in sensible combinations.

Planned generator actions:

### Common
- Oracle Answer
- Scene Change
- Spark

### Fantasy
- Generate Hex
- Generate Settlement
- Generate Encounter
- Generate Monster
- Generate Dungeon Area
- Generate Dungeon Faction
- Generate Quest
- Generate NPC
- Generate Treasure

### Sci-Fi
- Generate Star System
- Generate Planet
- Generate Planetcrawl Feature
- Generate Settlement/Habitation
- Generate Encounter
- Generate Alien
- Generate Site Area
- Generate Site Faction
- Generate NPC
- Generate Treasure
- Generate Techno-Thing

## Deduplication Rule

A table goes into `Common` only when sharing it does not alter the original probability, wording, or intended result. Similar-but-not-identical tables stay in their genre pack. Shared generator **code** may still call different Fantasy and Sci-Fi RollTables.
