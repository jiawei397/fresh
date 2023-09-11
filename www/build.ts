#!/usr/bin/env -S deno run -A
import { build } from "$fresh/dev.ts";
import config from "./fresh.config.ts";

await build(import.meta.url, config);
