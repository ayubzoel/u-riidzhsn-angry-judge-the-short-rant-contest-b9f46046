// Angry Judge: The Short Rant Contest
// Writes one short, funny rant about an everyday annoyance to entry.txt.
// Deterministic: no clock, no randomness, no network, no secrets.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const RANT =
  "Our office thermostat lives in a locked plastic cage, and the only " +
  "person with the key works from home. In July the office is a meat " +
  "locker. In January it is a sauna. I filed fourteen tickets. " +
  "Facilities answered one: 'Have you tried wearing a jacket?' I am " +
  "not asking for luxury, just a room where my fingers can type and my " +
  "sandwich does not melt. Free the thermostat. Free us all.";

// The grader sets MAKEFUN_OUTPUT_DIR to the output directory; locally
// the entry lands next to this program as ./entry.txt.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), RANT, "utf8");
