import { mkdirSync, writeFileSync } from "node:fs";

const haiku = [
  "TODO from last spring",
  "waits where I abandoned it",
  "it was my own code",
].join("\n");
if ([...haiku].length > 200 || haiku.trim().length === 0) {
  throw new Error("haiku must be 1-200 characters");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, haiku, "utf8");
