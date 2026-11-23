import * as fs from "node:fs";

// One Letter for Your Day (make.fun bounty u-puan-one-letter-for-your-day-e54e9c36).
// The entry is exactly one letter: C — for "chaos".
// Chaos is the day in one word: everything happening at once, nothing going
// to plan, and somehow still funny to tell afterwards. It is vivid (a sharp
// picture of a day coming apart at the seams), funny (self-deprecating, the
// kind of word you repeat to a friend), and true (everyone has had a chaos
// day). C is the most natural initial for it — no other C-word describes a
// day as immediately — and it avoids the crowded example picks A, F and Z.
// Runner-up was U for "unhinged": funnier, but it describes the person,
// while "chaos" describes the day itself, which is what the judge weighs
// first (vivid, specific picture of the day). S was rejected too: it splits
// between "survived", "stressed" and "sleepy", so the judge cannot settle
// on one word behind it.
const letter = "C";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", letter, "utf8");
