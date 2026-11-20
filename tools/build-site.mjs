import { cp, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const run = spawnSync(process.execPath, [path.join(root, "tools/build-pages.mjs")], { cwd: root, stdio: "inherit" });
if (run.status !== 0) process.exit(run.status ?? 1);
await mkdir(dist, { recursive: true });
const files = (await readdir(root)).filter((name) => name.endsWith(".html"));
for (const file of files) {
  const html = await readFile(path.join(root, file), "utf8");
  await writeFile(path.join(dist, file), html.replaceAll("dist/css/", "css/"));
}
await cp(path.join(root, "assets"), path.join(dist, "assets"), { recursive: true });
console.log(`Copied ${files.length} pages and local assets to dist/.`);
