/**
 * Offline sanity checks for the Badge 1 exam build:
 *  - JSON matches the QTI answer key.
 *  - Stimulus images exist for every question.
 *  - Adjusted-score math behaves under representative weight configurations.
 *
 * Usage: npx tsx scripts/qa-b1-exam.ts
 */

import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const REPO_ROOT = resolve(__dirname, "..", "..");
const JSON_PATH = resolve(
  __dirname,
  "..",
  "src/data/quizzes/b1-final-assessment.json"
);
const QTI_PATH = resolve(
  REPO_ROOT,
  "Badge_1/Badge_1_Assessment/assessment/qti-export/B1_Final_Assessment.xml"
);
const IMG_DIR = resolve(__dirname, "..", "public/quizzes/b1-final");

interface QuizQuestion {
  id: string;
  imageSrc?: string;
  imageAlt?: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
  feedback: Record<string, string>;
}
interface QuizData {
  id: string;
  questions: QuizQuestion[];
}

function fail(msg: string): never {
  console.error(`FAIL: ${msg}`);
  process.exit(1);
}

function ok(msg: string) {
  console.log(`OK:   ${msg}`);
}

function loadQTIKey(): Record<string, string> {
  const xml = readFileSync(QTI_PATH, "utf-8");
  const key: Record<string, string> = {};
  // For each <item ident="Qxx" ...>...</item>, find the first respcondition
  // that sets SCORE to 100 → that varequal's letter is the key.
  const itemRegex = /<item ident="(Q\d+)"[\s\S]*?<\/item>/g;
  let m: RegExpExecArray | null;
  while ((m = itemRegex.exec(xml)) !== null) {
    const ident = m[1];
    const itemBlock = m[0];
    const correct = itemBlock.match(
      /<respcondition[^>]*>\s*<conditionvar>\s*<varequal[^>]*>([A-D])<\/varequal>\s*<\/conditionvar>\s*<setvar[^>]*>100<\/setvar>/
    );
    if (!correct) fail(`No correct answer found in QTI for ${ident}`);
    key[ident] = correct[1];
  }
  return key;
}

function jsonIdToQti(id: string): string {
  // "b1-q1" → "Q01"
  const n = Number.parseInt(id.replace(/^b1-q/, ""), 10);
  return `Q${n.toString().padStart(2, "0")}`;
}

function main() {
  const data: QuizData = JSON.parse(readFileSync(JSON_PATH, "utf-8"));

  if (data.questions.length !== 25) {
    fail(`Expected 25 questions, got ${data.questions.length}`);
  }
  ok(`JSON has 25 questions`);

  const qtiKey = loadQTIKey();
  ok(`Parsed ${Object.keys(qtiKey).length} correct answers from QTI`);

  // Cross-check correct answers and required fields.
  for (const q of data.questions) {
    const qti = jsonIdToQti(q.id);
    const expected = qtiKey[qti];
    if (!expected) fail(`No QTI entry for ${q.id}`);
    if (q.correctAnswer.toUpperCase() !== expected) {
      fail(`Answer mismatch for ${q.id}: JSON=${q.correctAnswer.toUpperCase()} QTI=${expected}`);
    }
    if (!q.imageSrc || !q.imageAlt) {
      fail(`${q.id} missing imageSrc or imageAlt`);
    }
    const imgPath = resolve(
      __dirname,
      "..",
      "public",
      q.imageSrc.replace(/^\//, "")
    );
    if (!existsSync(imgPath)) {
      fail(`Missing stimulus file: ${imgPath}`);
    }
    if (q.options.length !== 4) fail(`${q.id} has ${q.options.length} options`);
    for (const letter of ["a", "b", "c", "d"]) {
      if (!q.options.some((o) => o.id === letter)) {
        fail(`${q.id} missing option ${letter}`);
      }
      if (!q.feedback[letter] || q.feedback[letter].length < 10) {
        fail(`${q.id} missing/short feedback for ${letter}`);
      }
    }
  }
  ok(`All 25 answer keys match QTI, all options + feedback present`);
  ok(`All 25 stimulus PNGs found under public/quizzes/b1-final/`);

  // Scoring smoke test: pretend a student got Q1, Q3, Q5 wrong (22/25).
  const wrongIds = new Set(["b1-q1", "b1-q3", "b1-q5"]);
  const responses: Record<string, string> = {};
  for (const q of data.questions) {
    if (wrongIds.has(q.id)) {
      const distractor = q.options.find((o) => o.id !== q.correctAnswer);
      responses[q.id] = distractor ? distractor.id : "a";
    } else {
      responses[q.id] = q.correctAnswer;
    }
  }
  let rawCorrect = 0;
  for (const q of data.questions) {
    if (responses[q.id] === q.correctAnswer) rawCorrect++;
  }
  if (rawCorrect !== 22) fail(`Expected raw 22, got ${rawCorrect}`);
  ok(`Raw scoring: 22/25 as expected`);

  // Adjusted with Q1 dropped (weight 0), Q3 half credit (0.5), rest 1.0.
  const weights = new Map<string, number>();
  for (const q of data.questions) weights.set(q.id, 1);
  weights.set("b1-q1", 0);
  weights.set("b1-q3", 0.5);
  let adjusted = 0;
  let adjTotal = 0;
  for (const q of data.questions) {
    const w = weights.get(q.id) ?? 1;
    adjTotal += w;
    if (responses[q.id] === q.correctAnswer) adjusted += w;
  }
  const expectedTotal = 23 + 0.5; // 23 of weight 1 + one of weight 0.5
  const expectedScore = 22; // wrong: Q1 (w=0, already not counted), Q3 (w=0.5, wrong → not added), Q5 (w=1, wrong)
  // Correct items contributing: 22 of weight 1 → 22. (Q3 wrong = 0, Q1 wrong = 0)
  if (Math.abs(adjTotal - expectedTotal) > 1e-9) {
    fail(`Adjusted total ${adjTotal} != ${expectedTotal}`);
  }
  if (Math.abs(adjusted - expectedScore) > 1e-9) {
    fail(`Adjusted score ${adjusted} != ${expectedScore}`);
  }
  ok(`Adjusted scoring: ${adjusted}/${adjTotal} with Q1 dropped and Q3 half credit`);

  console.log("\nAll Badge 1 exam checks passed.");
}

main();
