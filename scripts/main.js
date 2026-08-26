import { COMMON_TABLES } from "./common-tables.js";

const MODULE_ID = "sn-ultimate-roll-tables";
const COMMON_FOLDER_NAME = "SN Toolkit - Common";

Hooks.once("ready", async () => {
  if (!game.user.isGM) return;

  game.modules.get(MODULE_ID).api = {
    installCommonTables
  };

  const installed = game.settings.get(MODULE_ID, "commonTablesInstalled");
  if (!installed) {
    await installCommonTables();
  }
});

Hooks.once("init", () => {
  game.settings.register(MODULE_ID, "commonTablesInstalled", {
    name: "Common tables installed",
    scope: "world",
    config: false,
    type: Boolean,
    default: false
  });
});

async function getOrCreateCommonFolder() {
  let folder = game.folders.find(
    f => f.type === "RollTable" && f.name === COMMON_FOLDER_NAME
  );

  if (!folder) {
    folder = await Folder.create({
      name: COMMON_FOLDER_NAME,
      type: "RollTable",
      sorting: "a"
    });
  }

  return folder;
}

function toFoundryResults(results) {
  return results.map(([roll, text]) => ({
    type: CONST.TABLE_RESULT_TYPES.TEXT,
    text,
    range: [roll, roll],
    weight: 1,
    drawn: false
  }));
}

async function installCommonTables() {
  if (!game.user.isGM) {
    ui.notifications.warn("Only a GM can install SN Ultimate Roll Tables.");
    return;
  }

  const folder = await getOrCreateCommonFolder();
  let created = 0;
  let skipped = 0;

  for (const definition of COMMON_TABLES) {
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

  await game.settings.set(MODULE_ID, "commonTablesInstalled", true);
  ui.notifications.info(
    `SN Ultimate Roll Tables: ${created} Common table${created === 1 ? "" : "s"} created, ${skipped} already present.`
  );
}
