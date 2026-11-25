// One Word From Grandma — make.fun entry for @yuhao-qiao.
// The program writes one word to /output/entry.txt: the word my
// grandma would text about AI. The word is baked into the code below
// so the program runs with no network and writes the same bytes on
// every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word: "robit". It is exactly the typo a grandma would make
// texting about AI — she means "robot" and her fingers, or her
// autocorrect, drop the second o. One word, instantly grandma-like:
// warm, slightly confused by the technology, and funnier than any
// correct spelling because the mistake is the whole joke.
const LINE = "robit";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Written in full twice in this session; the word and logic are unchanged.
// Second pass: the typo is the whole joke — correct spelling would kill it.
