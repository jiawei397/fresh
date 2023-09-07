import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";
import { defineConfig } from "$fresh/server.ts";

export default defineConfig({
  plugins: [twindPlugin(twindConfig)],
  compilerTSConfig: [{
    dir: "static/ts",
    baseURL: "static",
  }],
  // esbuilderOptions: {
  //   target: ["chrome99", "firefox99", "safari15"],
  // },
});
