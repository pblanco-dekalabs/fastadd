export async function exists(path: string) {
  try {
    await Deno.open(path, { read: true });
    return true;
  } catch (_) {
    return false;
  }
}
