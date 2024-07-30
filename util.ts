import Enquirer from 'npm:enquirer'

import * as c from "https://deno.land/std@0.224.0/fmt/colors.ts"
export { c }

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

const _panicWithCode = <T extends unknown[]>(code: number, ...reason: T): never => {
  $(c.red('Panic!'), ...reason.map(arg => {
    if (typeof arg === "string") {
      return c.red(arg)
    }
    return arg
  }))
  Deno.exit(code)
}

export function panic<T extends unknown[]>(...reason: T): never {
  return _panicWithCode(1, ...reason)
}

panic.withCode = _panicWithCode
