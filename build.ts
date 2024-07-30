import hbs from "npm:handlebars-loader";
import { path } from "./deps.ts";
import { panic } from "./util.ts";

async function* getTemplates(root = "./templates"): AsyncGenerator<string> {
  for await (const entry of Deno.readDir(root)) {
    if (entry.isFile && entry.name.endsWith(".hbs")) {
      yield path.join(root, entry.name);
    } else if (entry.isDirectory) {
      yield* getTemplates(path.join(root, entry.name));
    }
  }
}

for await (const tpl of getTemplates()) {
  const loader = {
    hbs,
    rootContext: {},
    options: {},
    async: () => async (err: Error | null, source?: string) => {
      if (err == null) {
        const out = `// @ts-nocheck\n` + source!.replace(
          /var Handlebars = .+/,
          'import Handlebars from "npm:handlebars";',
        ).replace(/module\.exports = /g, "export default ");
        await Deno.writeTextFile(tpl.replace(".hbs", ".generated.ts"), out);
      } else {
        panic(err);
      }
    },
    resolve: (_: unknown, __: string, cb: () => void) => cb(),
  };
  loader.hbs(await Deno.readTextFile(tpl));
}
