# SN-Ultimate-Roll-Tables-Foundry-VTT

A Foundry VTT module adapting roll tables and procedural generators from SilverNightingale's **Ultimate One Page RPG Toolkit 2.1** and **Ultimate One-Page Solo RPG Toolkit: SCI-FI EDITION**.

## Current status

Early development release for **Foundry VTT V14**.

The module currently installs ordinary world-level Foundry RollTables into three folders:

- **SN Toolkit - Common**
- **SN Toolkit - Fantasy**
- **SN Toolkit - Sci-Fi**

Current coverage includes the shared oracle/name material, the Fantasy hexcrawl/dungeon/monster/NPC/quest material, and the Sci-Fi star-system/planetcrawl/site/alien/NPC/oracle material.

See [`docs/TABLE-INVENTORY.md`](docs/TABLE-INVENTORY.md) for the source-to-module table map.

### Why world tables first?

This implementation creates ordinary Foundry RollTables directly in the world so they can be tested and edited easily while the source data is being verified. Once the table set and generator logic are stable, the project can also package curated compendium content for distribution.

### Update-safe table installer

The table installer is intentionally conservative:

- Existing tables with the same module table name in the appropriate folder are left alone.
- Newly added module tables are installed automatically when the module's table-data version changes.
- This allows a GM to edit an installed table without a later module update silently overwriting it.

The module API also exposes installer helpers for manual use:

- `game.modules.get("sn-ultimate-roll-tables").api.installCommonTables()`
- `game.modules.get("sn-ultimate-roll-tables").api.installFantasyTables()`
- `game.modules.get("sn-ultimate-roll-tables").api.installSciFiTables()`
- `game.modules.get("sn-ultimate-roll-tables").api.installAllTables()`

## Attribution

This module includes adapted material from:

- [Ultimate One Page RPG Toolkit 2.1](https://silvernightingale.itch.io/ultimate-one-page-rpg-toolkit)
- [Ultimate One-Page Solo RPG Toolkit: SCI-FI EDITION](https://silvernightingale.itch.io/ultimate-one-page-solo-rpg-toolkit-sci-fi-edition)

Both works are by **SilverNightingale** and are used under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

The original toolkit material has been reorganized and adapted into Foundry VTT RollTables, generators, macros, compendium content, and related data structures.

This project is unofficial and is not endorsed by SilverNightingale.

## Licensing

- **Module code and original software files:** MIT License. See [`LICENSE`](LICENSE).
- **Adapted SilverNightingale toolkit content:** CC BY 4.0. See [`CONTENT-LICENSE.md`](CONTENT-LICENSE.md).

The MIT License does not relicense the adapted CC BY 4.0 toolkit content.
