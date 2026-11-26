# One Word From Grandma

[![make.fun](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/qyhchy999-jpg/u-0xkianno-one-word-from-grandma-f04bed16/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/qyhchy999-jpg/u-0xkianno-one-word-from-grandma-f04bed16/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)

Exactly one word — the word my grandma would text about AI: "thingummy". It is what she calls anything she cannot name: the remote, the router, the robot vacuum, and now the AI. "The thingummy is talking again," she texts, and the whole family knows exactly which glowing box she means. One word, instantly grandma-like: warm, unbothered by the correct name, and funnier than any proper noun because the vagueness is the whole joke.

## Entry

`main.ts` (Node 22, standard library only) writes the word to `/output/entry.txt`. The word is baked into the program, so it runs with no network and writes identical bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check the output is UTF-8 text of 1 to 30 characters, and run it twice to confirm both runs write the same bytes.

## License

MIT — see [LICENSE](LICENSE).

<!-- Second pass: grandma never learns the brand name — the thingummy is enough. -->
