export const SPECIAL_ROUTE_EXTS = ["js", "ts", "tsx", "jsx"];
export const SPECIAL_ROUTE_PATHS = ["_app", "_404", "_500"].map((name) =>
  SPECIAL_ROUTE_EXTS.map((ext) => `/${name}.${ext}`)
).flat();

export function checkMiddlewareByPath(path: string): boolean {
  return SPECIAL_ROUTE_EXTS.map((ext) => `/_middleware.${ext}`).some((name) =>
    path.endsWith(name)
  );
}
