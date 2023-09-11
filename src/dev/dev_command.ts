import { updateCheck } from "./update_check.ts";
import { DAY, dirname, fromFileUrl, join } from "./deps.ts";
import { FreshOptions } from "../server/mod.ts";
import { build } from "./build.ts";
import { collect, ensureMinDenoVersion, generate, Manifest } from "./mod.ts";

async function start(
  base: string,
  entrypoint: string,
) {
  ensureMinDenoVersion();

  // Run update check in background
  updateCheck(DAY).catch(() => {});

  entrypoint = new URL(entrypoint, base).href;

  const dir = dirname(fromFileUrl(base));

  let currentManifest: Manifest;
  const prevManifest = Deno.env.get("FRSH_DEV_PREVIOUS_MANIFEST");
  if (prevManifest) {
    currentManifest = JSON.parse(prevManifest);
  } else {
    currentManifest = { islands: [], routes: [] };
  }
  const newManifest = await collect(dir);
  Deno.env.set("FRSH_DEV_PREVIOUS_MANIFEST", JSON.stringify(newManifest));

  const manifestChanged =
    !arraysEqual(newManifest.routes, currentManifest.routes) ||
    !arraysEqual(newManifest.islands, currentManifest.islands);

  if (manifestChanged) await generate(dir, newManifest);
  return dir;
}

export async function dev(
  base: string,
  entrypoint: string,
) {
  await start(base, entrypoint);
  await import(entrypoint);
}

export async function buildFresh(
  base: string,
  entrypoint: string,
  options: FreshOptions = {},
) {
  const dir = await start(base, entrypoint);
  await build(join(dir, "fresh.gen.ts"), options);
}

function arraysEqual<T>(a: T[], b: T[]): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}