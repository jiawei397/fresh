import { FreshOptions } from "$fresh/server.ts";

export default {
  async render(_ctx, render) {
    await new Promise<void>((r) => r());
    const body = render();
    if (typeof body !== "string") {
      throw new Error("body is missing");
    }
  },
  compilerTSConfig: [{
    dir: "./static/ts/",
    baseURL: "static",
    // prefix: "base",
  }],
} as FreshOptions;
