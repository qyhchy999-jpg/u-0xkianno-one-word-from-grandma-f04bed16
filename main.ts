// One Word From Grandma — make.fun entry for @yuhao-qiao.
// The program writes one word to /output/entry.txt: the word my
// grandma would text about AI. The word is baked into the code below
// so the program runs with no network and writes the same bytes on
// every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word: "thingummy". It is what grandma calls anything she cannot
// name — the remote, the router, the robot vacuum, and now the AI.
// "The thingummy is talking again," she texts, and everyone in the
// family knows exactly which glowing box she means. One word, instantly
// grandma-like: warm, unbothered by the correct name, and funnier than
// any proper noun because the vagueness is the whole joke.
const LINE = "thingummy";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Written in full twice in this session; the word and logic are unchanged.
// Second pass: grandma never learns the brand name — the thingummy is enough.
