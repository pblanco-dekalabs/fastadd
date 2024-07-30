// @deno-types="npm:@types/yargs"
import yargs from "npm:yargs";
import { bootRoute, collectRouteInfo } from "./funcs.ts";
import { $, c, serializeJson } from "./util.ts";
import { askRestore, checkRestore, restore } from "./restore.ts";

let ok = false;
const args = await yargs(Deno.args)
  .command("route", "Creates a new route", () => {}, async () => {
    ok = true;
    if (await checkRestore() && await askRestore()) {
      return await restore();
    }
    const info = await collectRouteInfo();
    if (!await serializeJson(".boot.json", info)) {
      $(c.yellow(`Warning! Could not write .boot.json file`));
    }
    await bootRoute(info);
  })
  .version("1.1.0")
  .parse();

void args;
if (!ok) {
  $(c.red(`Bad usage, use --help`));
  Deno.exit(1);
}
