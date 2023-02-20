// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[name].tsx";
import * as $1 from "./routes/_404.tsx";
import * as $2 from "./routes/_500.tsx";
import * as $3 from "./routes/_app.tsx";
import * as $4 from "./routes/_middleware.ts";
import * as $5 from "./routes/api/get_only.ts";
import * as $6 from "./routes/assetsCaching/index.tsx";
import * as $7 from "./routes/books/[id].tsx";
import * as $8 from "./routes/connInfo.ts";
import * as $9 from "./routes/evil.tsx";
import * as $10 from "./routes/failure.ts";
import * as $11 from "./routes/index.tsx";
import * as $12 from "./routes/intercept.tsx";
import * as $13 from "./routes/intercept_args.tsx";
import * as $14 from "./routes/islands/index.tsx";
import * as $15 from "./routes/layeredMdw/_middleware.ts";
import * as $16 from "./routes/layeredMdw/layer2-no-mw/without_mw.ts";
import * as $17 from "./routes/layeredMdw/layer2/_middleware.ts";
import * as $18 from "./routes/layeredMdw/layer2/abc.ts";
import * as $19 from "./routes/layeredMdw/layer2/index.ts";
import * as $20 from "./routes/layeredMdw/layer2/layer3/[id].ts";
import * as $21 from "./routes/layeredMdw/layer2/layer3/_middleware.ts";
import * as $22 from "./routes/middleware_root.ts";
import * as $23 from "./routes/not_found.ts";
import * as $24 from "./routes/params.tsx";
import * as $25 from "./routes/props/[id].tsx";
import * as $26 from "./routes/static.tsx";
import * as $27 from "./routes/status_overwrite.tsx";
import * as $28 from "./routes/wildcard.tsx";
import * as $$0 from "./islands/Counter.tsx";
import * as $$1 from "./islands/Test.tsx";
import * as $$2 from "./islands/kebab/kebab-case-counter-test.tsx";

const manifest = {
  routes: {
    "./routes/[name].tsx": $0,
    "./routes/_404.tsx": $1,
    "./routes/_500.tsx": $2,
    "./routes/_app.tsx": $3,
    "./routes/_middleware.ts": $4,
    "./routes/api/get_only.ts": $5,
    "./routes/assetsCaching/index.tsx": $6,
    "./routes/books/[id].tsx": $7,
    "./routes/connInfo.ts": $8,
    "./routes/evil.tsx": $9,
    "./routes/failure.ts": $10,
    "./routes/index.tsx": $11,
    "./routes/intercept.tsx": $12,
    "./routes/intercept_args.tsx": $13,
    "./routes/islands/index.tsx": $14,
    "./routes/layeredMdw/_middleware.ts": $15,
    "./routes/layeredMdw/layer2-no-mw/without_mw.ts": $16,
    "./routes/layeredMdw/layer2/_middleware.ts": $17,
    "./routes/layeredMdw/layer2/abc.ts": $18,
    "./routes/layeredMdw/layer2/index.ts": $19,
    "./routes/layeredMdw/layer2/layer3/[id].ts": $20,
    "./routes/layeredMdw/layer2/layer3/_middleware.ts": $21,
    "./routes/middleware_root.ts": $22,
    "./routes/not_found.ts": $23,
    "./routes/params.tsx": $24,
    "./routes/props/[id].tsx": $25,
    "./routes/static.tsx": $26,
    "./routes/status_overwrite.tsx": $27,
    "./routes/wildcard.tsx": $28,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
    "./islands/Test.tsx": $$1,
    "./islands/kebab/kebab-case-counter-test.tsx": $$2,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
