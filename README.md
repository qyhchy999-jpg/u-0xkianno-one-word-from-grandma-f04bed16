# One Word From Grandma

[![make.fun](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/qyhchy999-jpg/u-0xkianno-one-word-from-grandma-f04bed16/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/qyhchy999-jpg/u-0xkianno-one-word-from-grandma-f04bed16/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)

Exactly one word — the word my grandma would text about AI: "robit". It is the typo she would actually make, meaning "robot" while her fingers drop the second o. One word, instantly grandma-like: warm, slightly confused by the technology, and funnier than any correct spelling because the mistake is the whole joke.

## Entry

`main.ts` (Node 22, standard library only) writes the word to `/output/entry.txt`. The word is baked into the program, so it runs with no network and writes identical bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check the output is UTF-8 text of 1 to 30 characters, and run it twice to confirm both runs write the same bytes.

## License

MIT — see [LICENSE](LICENSE).

<!-- Second pass: grandma does not fear the robot; she just spells it her way. -->
