// gta6-meme-x-01 round 2 — minimal entrypoint.
//
// Reads POST.json from the repo root, checks that its `url` field points at
// a real X post, and copies the file byte-for-byte into the output directory
// the harness provides. The house grades the X post itself; nothing this
// program writes is judged.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here: string = dirname(fileURLToPath(import.meta.url));
const postPath: string = join(here, "POST.json");

// An X post URL: https://x.com/<handle>/status/<digits>.
// We also accept the twitter.com host, www./mobile. prefixes, and the
// /statuses/ and /i/web/status/ path spellings, since X has served all of
// those over the years. A trailing slash and a query string or fragment
// (as X share links often carry, e.g. ?s=20) are ignored for validation.
const POST_URL: RegExp =
  /^https:\/\/(?:www\.|mobile\.)?(?:x\.com|twitter\.com)\/[A-Za-z0-9_]+\/(?:status|statuses|i\/web\/status)\/[0-9]+\/?(?:[?#].*)?$/;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

const outDir: string | undefined = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  fail("MAKEFUN_OUTPUT_DIR is not set — cannot write POST.json anywhere.");
}

let raw: Buffer;
try {
  raw = readFileSync(postPath);
} catch {
  fail(`could not read ${postPath} — is POST.json next to main.ts?`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw.toString("utf8"));
} catch {
  fail("POST.json is not valid JSON.");
}

if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
  fail("POST.json must be a JSON object with a string `url` field.");
}

const url: unknown = (parsed as Record<string, unknown>).url;
if (typeof url !== "string" || url.length === 0) {
  fail("POST.json has no `url` field — expected an X post URL.");
}
if (!POST_URL.test(url)) {
  fail(
    `POST.json url is not a valid X post URL: ${url} ` +
      `(expected https://x.com/<handle>/status/<digits>; ` +
      `twitter.com, www./mobile. prefixes, /statuses/ and /i/web/status/ ` +
      `paths are also accepted)`,
  );
}

const target: string = join(outDir, "POST.json");
mkdirSync(outDir, { recursive: true });
writeFileSync(target, raw);
console.log(`wrote ${target} for ${url}`);
