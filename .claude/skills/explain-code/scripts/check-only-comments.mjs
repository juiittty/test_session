// 주석을 다는 동안 코드가 바뀌지 않았는지 확인하는 스크립트.
//
// 사용법:
//   node check-only-comments.mjs snapshot <파일>   주석을 달기 전에 원본을 저장한다
//   node check-only-comments.mjs check <파일>      [설명] 주석 줄을 뺀 내용이 원본과 같은지 비교한다
//
// 비교할 때는 양쪽에서 "[설명]"이 들어간 한 줄짜리 주석을 모두 빼고 본다.
// 그래서 [설명] 주석이 한 줄씩 따로 있어야 하고, 코드 줄 끝에 붙이면 안 된다.

import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const [mode, target] = process.argv.slice(2);
if (!["snapshot", "check"].includes(mode) || !target) {
  console.error("사용법: node check-only-comments.mjs <snapshot|check> <파일>");
  process.exit(2);
}

const filePath = resolve(target);
const snapshotDir = join(tmpdir(), "explain-code-snapshots");
const snapshotPath = join(
  snapshotDir,
  createHash("sha1").update(filePath).digest("hex") + ".txt",
);

// "[설명]"이 들어간 줄 전체 주석: // ..., /* ... */, {/* ... */}
const MARKER_LINE = /^\s*(\/\/.*\[설명\].*|\/\*.*\[설명\].*\*\/|\{\s*\/\*.*\[설명\].*\*\/\s*\})\s*$/;

const strip = (text) =>
  text
    .replace(/\r\n/g, "\n")
    .split("\n")
    .filter((line) => !MARKER_LINE.test(line));

if (mode === "snapshot") {
  mkdirSync(snapshotDir, { recursive: true });
  writeFileSync(snapshotPath, readFileSync(filePath));
  console.log(`원본 저장: ${snapshotPath}`);
  process.exit(0);
}

if (!existsSync(snapshotPath)) {
  console.error("저장된 원본이 없습니다. 주석을 달기 전에 snapshot을 먼저 실행하세요.");
  process.exit(2);
}

const before = strip(readFileSync(snapshotPath, "utf8"));
const after = strip(readFileSync(filePath, "utf8"));

const problems = [];
const max = Math.max(before.length, after.length);
for (let i = 0; i < max && problems.length < 10; i++) {
  if (before[i] !== after[i]) {
    problems.push(`  ${i + 1}번째 줄 (주석 제외 기준)\n    원본: ${before[i] ?? "(없음)"}\n    지금: ${after[i] ?? "(없음)"}`);
  }
}

if (problems.length === 0) {
  console.log("OK: [설명] 주석만 추가되었고 코드는 그대로입니다.");
  process.exit(0);
}

console.error("코드가 바뀐 부분이 있습니다:\n" + problems.join("\n"));
process.exit(1);
