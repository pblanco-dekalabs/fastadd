// @deno-types="npm:@types/yargs"
import yargs from 'npm:yargs'
import { bootAny, bootRoute, collectRouteInfo } from "./funcs.ts";
import { $, c, serializeJson, tryReadJson } from "./util.ts";

let ok = false
const args = await yargs(Deno.args)
  .command('route', 'Creates a new route', () => {}, async () => {
    ok = true
    const info = await collectRouteInfo()
    if (!await serializeJson('.boot.json', info)) {
      $(c.yellow(`Warning! Could not write .boot.json file`))
    }
    await bootRoute(info)
  })
  .command('boot', 'Boots a previous collected information', () => {}, async () => {
    ok = true
    const file = await tryReadJson('.boot.json')
    if (file == null) {
      $(c.red(`No .boot.json file found! You can't boot a component unless you've first initialized it!`))
      Deno.exit(2)
    } else {
      bootAny(file)
    }
  })
  .version('1.0.0')
  .parse()

void args
if (!ok) {
  $(c.red(`Bad usage, use --help`))
  Deno.exit(1)
}
