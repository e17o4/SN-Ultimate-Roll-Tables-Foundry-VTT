import { COMMON_TABLES } from "./common-tables.js";
import { FANTASY_HEXCRAWL_TABLES } from "./fantasy-hexcrawl-tables.js";
import { FANTASY_DUNGEON_TABLES } from "./fantasy-dungeon-tables.js";
import { FANTASY_CHARACTER_TABLES } from "./fantasy-character-tables.js";
import { FANTASY_ORACLE_TABLES } from "./fantasy-oracle-tables.js";
import { SCIFI_SPACE_TABLES } from "./scifi-space-tables.js";
import { SCIFI_SITE_TABLES } from "./scifi-site-tables.js";
import { SCIFI_CHARACTER_TABLES } from "./scifi-character-tables.js";
import { SCIFI_ORACLE_TABLES } from "./scifi-oracle-tables.js";

const MODULE_ID = "sn-ultimate-roll-tables";
const DATA_VERSION = "0.3.0";

const COMMON_FOLDER_NAME = "SN Toolkit - Common";
const FANTASY_FOLDER_NAME = "SN Toolkit - Fantasy";
const SCIFI_FOLDER_NAME = "SN Toolkit - Sci-Fi";

const FANTASY_TABLES = [
  ...FANTASY_HEXCRAWL_TABLES,
  ...FANTASY_DUNGEON_TABLES,
  ...FANTASY_CHARACTER_TABLES,
  ...FANTASY_ORACLE_TABLES
];

const SCIFI_TABLES = [
  ...SCIFI_SPACE_TABLES,
  ...SCIFI_SITE_TABLES,
  ...SCIFI_CHARACTER_TABLES,
  ...SCIFI_ORACLE_TABLES
];

Hooks.once("init", () => {
  game.settings.register(MODULE_ID, "commonTablesInstalled", {
    name: "Common tables installed",
    scope: "world",
    config: false,
    type: Boolean,
    default: false
  });

  game.settings.register(MODULE_ID, "fantasyTablesInstalled", {
    name: "Fantasy tables installed",
    scope: "world",
    config: false,
    type: Boolean,
    default: false
  });

  game.settings.register(MODULE_ID, "scifiTablesInstalled", {
    name: "Sci-Fi tables installed",
    scope: "world",
    config: false,
    type: Boolean,
    default: false
  });

  game.settings.register(MODULE_ID, "installedDataVersion", {
    name: "Installed table data version",
    scope: "world",
    config: false,
    type: String,
    default: ""
  });
});

Hooks.once("ready", async () => {
  if (!game.user.isGM) return;

  game.modules.get(MODULE_ID).api = {
    installCommonTables,
    installFantasyTables,
    installSciFiTables,
    installAllTables
  };

  // Versioned installation means module updates can add new tables without
  // overwriting any tables the GM has already edited. Existing names are
  // skipped; newly introduced names are installed automatically.
  const installedDataVersion = game.settings.get(MODULE_ID, "installedDataVersion");
  if (installedDataVersion !== DATA_VERSION) {
    const result = await installAllTables({ notify: false });
    await game.settings.set(MODULE_ID, "installedDataVersion", DATA_VERSION);

    const created = result.common.created + result.fantasy.created + result.scifi.created;
    const skipped = result.common.skipped + result.fantasy.skipped + result.scifi.skipped;
    ui.notifications.info(
      `SN Ultimate Roll Tables ${DATA_VERSION}: ${created} table${created === 1 ? "" : "s"} added, ${skipped} already present.`
    );
  }
});

async function getOrCreateFolder(name) {
  let folder = game.folders.find(
    f => f.type === "RollTable" && f.name === name
  );

  if (!folder) {
    folder = await Folder.create({
      name,
      type: "RollTable",
      sorting: "a"
    });
  }

  return folder;
}

function normalizeRange(rangeOrRoll) {
  if (Array.isArray(rangeOrRoll)) return rangeOrRoll;
  return [rangeOrRoll, rangeOrRoll];
}

function toFoundryResults(results) {
  return results.map(([rangeOrRoll, text]) => ({
    type: CONST.TABLE_RESULT_TYPES.TEXT,
    text,
    range: normalizeRange(rangeOrRoll),
    weight: 1,
    drawn: false
  }));
}

async function installTableSet(definitions, folderName) {
  if (!game.user.isGM) {
    ui.notifications.warn("Only a GM can install SN Ultimate Roll Tables.");
    return { created: 0, skipped: 0 };
  }

  const folder = await getOrCreateFolder(folderName);
  let created = 0;
  let skipped = 0;

  for (const definition of definitions) {
    const existing = game.tables.find(t =>
      t.name === definition.name && t.folder?.id === folder.id
    );

    if (existing) {
      skipped++;
      continue;
    }

    await RollTable.create({
      name: definition.name,
      formula: definition.formula,
      results: toFoundryResults(definition.results),
      folder: folder.id,
      description: `<p>Adapted from SilverNightingale's Ultimate One Page RPG Toolkit series under CC BY 4.0.</p><p>Module table key: <code>${definition.key}</code></p>`
    });

    created++;
  }

  return { created, skipped };
}

async function installCommonTables({ notify = true } = {}) {
  const result = await installTableSet(COMMON_TABLES, COMMON_FOLDER_NAME);
  await game.settings.set(MODULE_ID, "commonTablesInstalled", true);

  if (notify) {
    ui.notifications.info(
      `SN Ultimate Roll Tables: ${result.created} Common table${result.created === 1 ? "" : "s"} created, ${result.skipped} already present.`
    );
  }

  return result;
}

async function installFantasyTables({ notify = true } = {}) {
  const result = await installTableSet(FANTASY_TABLES, FANTASY_FOLDER_NAME);
  await game.settings.set(MODULE_ID, "fantasyTablesInstalled", true);

  if (notify) {
    ui.notifications.info(
      `SN Ultimate Roll Tables: ${result.created} Fantasy table${result.created === 1 ? "" : "s"} created, ${result.skipped} already present.`
    );
  }

  return result;
}

async function installSciFiTables({ notify = true } = {}) {
  const result = await installTableSet(SCIFI_TABLES, SCIFI_FOLDER_NAME);
  await game.settings.set(MODULE_ID, "scifiTablesInstalled", true);

  if (notify) {
    ui.notifications.info(
      `SN Ultimate Roll Tables: ${result.created} Sci-Fi table${result.created === 1 ? "" : "s"} created, ${result.skipped} already present.`
    );
  }

  return result;
}

async function installAllTables({ notify = true } = {}) {
  const common = await installCommonTables({ notify: false });
  const fantasy = await installFantasyTables({ notify: false });
  const scifi = await installSciFiTables({ notify: false });

  if (notify) {
    const created = common.created + fantasy.created + scifi.created;
    const skipped = common.skipped + fantasy.skipped + scifi.skipped;
    ui.notifications.info(
      `SN Ultimate Roll Tables: ${created} table${created === 1 ? "" : "s"} created, ${skipped} already present.`
    );
  }

  return { common, fantasy, scifi };
}
