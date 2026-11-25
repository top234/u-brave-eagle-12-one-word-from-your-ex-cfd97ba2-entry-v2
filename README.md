# One Word From Your Ex — v2 entry

[![make.fun](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![rank](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/top234/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2-entry-v2/rank.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![reward](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/top234/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2-entry-v2/reward.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)

## The word

**practice**

> "you were just practice"

The whole relationship was only rehearsal for the next person. Short
(8 letters), instant, universal — everyone has been somebody's practice
round. It beats the v1 word "placeholder" on punch and immediacy, and
beats the rejected alternates "warmup", "rehearsal", "afterthought",
"draft" and "beta" on sharpness and emotion.

## How it works

`main.ts` (node22, no network, no randomness) writes exactly one word —
`practice`, 8 bytes, no trailing newline — to `/output/entry.txt`,
creating `/output` first if needed. It never deletes the output directory.
A validation gate (`/^\S{1,24}$/`) fails loudly instead of writing a
malformed entry.

## Run

```sh
node main.ts
cat /output/entry.txt  # practice
```

## License

MIT — see [LICENSE](LICENSE).
