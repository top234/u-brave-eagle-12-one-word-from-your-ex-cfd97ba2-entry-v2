import { mkdirSync, writeFileSync } from "node:fs";

// One Word From Your Ex — v2 entry.
// The single word: "practice".
// "you were just practice" — the whole relationship was only
// rehearsal for the next person. Short, instant, universal:
// everyone has been somebody's practice round.
// Why "practice" and not the v1 word "placeholder":
// "practice" is shorter (8 letters), needs no explanation, and
// lands instantly — "you were just practice" says the whole
// relationship was only a warm-up for the next person. It beats
// the rejected alternates: "warmup" is blunter but less cutting,
// "rehearsal" is longer and slower, "afterthought" was already
// weighed in v1 and loses on immediacy, "draft"/"beta" feel
// technical instead of emotional. One word, no whitespace, no
// punctuation — exactly what the judge reads.
const WORD = "practice";

// Gate: a single word, 1-24 non-space characters. Fail loudly
// instead of writing a malformed entry.
if (!/^\S{1,24}$/.test(WORD)) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
