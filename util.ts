import Enquirer from 'npm:enquirer'
export * as c from "https://deno.land/std@0.224.0/fmt/colors.ts"

export const $ = console.log.bind(console)

export const enq = new Enquirer()

export async function tryRead(path: string) {
  try {
    return await Deno.readTextFile(path)
  } catch (_) {
    return null
  }
}

export async function tryReadJson(path: string) {
  const file = await tryRead(path)
  if (file == null) {
    return null
  }
  return JSON.parse(file)
}

export async function serializeJson(path: string, object: unknown) {
  try {
    await Deno.writeTextFile(path, JSON.stringify(object, null, 2))
    return true
  } catch(_) {
    return false
  }
}
