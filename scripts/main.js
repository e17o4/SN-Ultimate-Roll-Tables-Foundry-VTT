import { COMMON_TABLES } from "./common-tables.js";
import { FANTASY_HEXCRAWL_TABLES } from "./fantasy-hexcrawl-tables.js";
import { FANTASY_DUNGEON_TABLES } from "./fantasy-dungeon-tables.js";
import { FANTASY_CHARACTER_TABLES } from "./fantasy-character-tables.js";
import { FANTASY_ORACLE_TABLES } from "./fantasy-oracle-tables.js";

const MODULE_ID = "sn-ultimate-roll-tables";
const COMMON_FOLDER_NAME = "SN Toolkit - Common";
const FANTASY_FOLDER_NAME = "SN Toolkit - Fantasy";

const FANTASY_TABLES = [
  ...FANTASY_HEXCRAWL_TABLES,
  ...FANTASY_DUNGEON_TABLES,
  ...FANTASY_CHARACTER_TABLES,
  ...FANTASY_ORACLE_TABLES
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
});

Hooks.once("ready", async () => {
  if (!game.user.isGM) return;

  game.modules.get(MODULE_ID).api = {
    installCommonTables,
    installFantasyTables,
    installAllTables
  };

  if (!game.settings.get(MODULE_ID, "commonTablesInstalled")) {
    await installCommonTables();
  }

  if (!game.settings.get(MODULE_ID, "fantasyTablesInstalled")) {
    await installFantasyTables();
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

async function installCommonTables() {
  const result = await installTableSet(COMMON_TABLES, COMMON_FOLDER_NAME);
  await game.settings.set(MODULE_ID, "commonTablesInstalled", true);
  ui.notifications.info(
    `SN Ultimate Roll Tables: ${result.created} Common table${result.created === 1 ? "" : "s"} created, ${result.skipped} already present.`
  );
  return result;
}

async function installFantasyTables() {
  const result = await installTableSet(FANTASY_TABLES, FANTASY_FOLDER_NAME);
  await game.settings.set(MODULE_ID, "fantasyTablesInstalled", true);
  ui.notifications.info(
    `SN Ultimate Roll Tables: ${result.created} Fantasy table${result.created === 1 ? "" : "s"} created, ${result.skipped} already present.`
  );
  return result;
}

async function installAllTables() {
  const common = await installCommonTables();
  const fantasy = await installFantasyTables();
  return { common, fantasy };
}
