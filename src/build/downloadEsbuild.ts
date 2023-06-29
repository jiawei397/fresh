// Download esbuild before server started. This file only works for production build.
import { initEsbuild } from "./esbuild.ts";

await initEsbuild();
console.log("esbuild initialized");

Deno.exit(0);
