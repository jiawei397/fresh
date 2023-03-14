// download esbuild before server started
import { ensureEsbuildInitialized } from "./server.ts";

await ensureEsbuildInitialized();
console.log("esbuild initialized");

Deno.exit(0);