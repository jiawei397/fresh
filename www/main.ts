/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import twindPlugin from "$fresh/plugins/twind.ts";

import manifest from "./fresh.gen.ts";
import twindConfig from "./twind.config.ts";

await start(manifest, {
    plugins: [twindPlugin(twindConfig)],
    compilerTSConfig: [{
        dir: "static/ts",
        baseURL: "static",
    }],
    esbuilderOptions: {
        target: ["chrome99", "firefox99", "safari15"],
    }
});
