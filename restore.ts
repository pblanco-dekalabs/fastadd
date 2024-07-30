import { exists } from "./fs/operations.ts";
import { bootAny } from "./funcs.ts";
import { $, c, enq, panic, tryReadJson } from "./util.ts";

export async function restore() {
  const file = await tryReadJson(".boot.json");
  if (file == null) {
    panic(
      `No .boot.json file found! You can't boot a component unless you've first initialized it!`,
    );
  } else {
    $(c.gray(`Restoring previous session...`));
    bootAny(file);
  }
}

export async function checkRestore() {
  if (await exists(".boot.json")) {
    return true;
  }
  return false;
}

export async function askRestore() {
  $(c.gray(
    `.boot.json file found. Would you like to restore a previous session?`,
  ));
  const { shouldRestore } = await enq.prompt([{
    type: "confirm",
    name: "shouldRestore",
    message: "Restore previous session?",
  }]) as { shouldRestore: boolean };
  return shouldRestore;
}
