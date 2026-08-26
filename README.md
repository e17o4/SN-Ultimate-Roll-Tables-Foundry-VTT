# SN-Ultimate-Roll-Tables-Foundry-VTT

A Foundry VTT module adapting roll tables and procedural generators from SilverNightingale's **Ultimate One Page RPG Toolkit 2.1** and **Ultimate One-Page Solo RPG Toolkit: SCI-FI EDITION**.

## Current status

Early development release for **Foundry VTT V14**.

The module currently installs the first shared/Common RollTables into a world-level folder named **SN Toolkit - Common** when a GM first loads a world with the module enabled.

Current Common tables:

- Oracle
- Change the Scene
- Event Seeds
- Settlement Culture
- Settlement Needs
- Factions + Traits
- Politics
- Settlement Events
- Chamber Shape
- Passage Type
- Opening State
- Beast Activity

Fantasy and Sci-Fi table packs and higher-level generators are being added next. See [`docs/TABLE-INVENTORY.md`](docs/TABLE-INVENTORY.md) for the planned table map.

### Why world tables first?

This first implementation creates ordinary Foundry RollTables directly in the world so they can be tested and edited easily while the source data is being verified. Once the full table set and generator logic are stable, the project can also package curated compendium content for distribution.

The installer is intentionally repeat-safe: it skips Common tables that already exist in the module's Common folder rather than creating duplicates.

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
