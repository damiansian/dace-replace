/**
 * Generate the Badge 1 (Discover) final exam JSON from the canonical question
 * bank at `Badge_1/Badge_1_Assessment/assessment/B1_Final_Assessment_Questions.md`.
 *
 * Usage:
 *   npm run b1:generate
 *
 * Output: src/data/quizzes/b1-final-assessment.json
 */

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const REPO_ROOT = resolve(__dirname, "..", "..");
const BANK_PATH = resolve(
  REPO_ROOT,
  "Badge_1/Badge_1_Assessment/assessment/B1_Final_Assessment_Questions.md"
);
const QTI_PATH = resolve(
  REPO_ROOT,
  "Badge_1/Badge_1_Assessment/assessment/qti-export/B1_Final_Assessment.xml"
);
const OUT_PATH = resolve(
  __dirname,
  "..",
  "src/data/quizzes/b1-final-assessment.json"
);

interface QuizOption {
  id: string;
  text: string;
}

interface QuizQuestion {
  id: string;
  question: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Per-question link to the source stimulus in the Figma exam file. */
  figmaUrl?: string;
  options: QuizOption[];
  correctAnswer: string;
  feedback: Record<string, string>;
}

interface QuizData {
  id: string;
  title: string;
  lessonPath: string;
  questions: QuizQuestion[];
}

function stripMarkdownLinks(text: string): string {
  // Convert [label](url) → label, strip stray markdown
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

function cleanWhitespace(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

function unquote(text: string): string {
  const trimmed = text.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("\u201C") && trimmed.endsWith("\u201D"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

/**
 * Build a map of question number → Figma stimulus URL by parsing the QTI XML.
 * The QTI is the only source that carries the per-question `node-id`, so we
 * always read it directly rather than re-deriving from the markdown bank.
 */
function loadFigmaUrlsFromQti(): Map<number, string> {
  const xml = readFileSync(QTI_PATH, "utf-8");
  const urls = new Map<number, string>();
  // Each <item ident="Qxx" …> block contains a "View stimulus in Figma" link.
  const itemRegex = /<item ident="Q(\d+)"[\s\S]*?<\/item>/g;
  let m: RegExpExecArray | null;
  while ((m = itemRegex.exec(xml)) !== null) {
    const qNum = Number.parseInt(m[1], 10);
    const linkMatch = m[0].match(
      /href="(https:\/\/www\.figma\.com\/[^"]+)"[^>]*>View stimulus in Figma</
    );
    if (linkMatch) {
      urls.set(qNum, linkMatch[1]);
    }
  }
  return urls;
}

function parseQuestionBlock(qNum: number, block: string): QuizQuestion {
  // Stimulus image (alt + path). Alt text may contain literal `]` characters,
  // so `]` only terminates the alt when followed by `(stimuli/...png)`.
  const stimMatch = block.match(
    /!\[((?:[^\]]|\](?!\(stimuli\/))+)\]\(stimuli\/(q\d+-stimulus\.png)\)/
  );
  const imageAlt = stimMatch ? cleanWhitespace(stimMatch[1]) : undefined;
  const imageFile = stimMatch ? stimMatch[2] : undefined;

  // Question stem: between **Question:** and **Answer Options:**
  const stemMatch = block.match(
    /\*\*Question:\*\*\s*\n([\s\S]*?)\n\*\*Answer Options:\*\*/
  );
  if (!stemMatch) {
    throw new Error(`Q${qNum}: no question stem found`);
  }
  const question = cleanWhitespace(stripMarkdownLinks(stemMatch[1]));

  // Options A–D
  const optionsBlock = block.match(
    /\*\*Answer Options:\*\*\s*\n([\s\S]*?)\n\*\*Correct Answer:\*\*/
  );
  if (!optionsBlock) {
    throw new Error(`Q${qNum}: no answer options found`);
  }
  const optionLines = optionsBlock[1].split(/\r?\n/).filter((l) => l.trim());
  const options: QuizOption[] = [];
  for (const line of optionLines) {
    const m = line.match(/^([A-D])\)\s+(.*?)\s*$/);
    if (m) {
      options.push({
        id: m[1].toLowerCase(),
        text: cleanWhitespace(stripMarkdownLinks(m[2])),
      });
    }
  }
  if (options.length !== 4) {
    throw new Error(`Q${qNum}: expected 4 options, found ${options.length}`);
  }

  // Correct answer letter
  const correctMatch = block.match(/\*\*Correct Answer:\*\*\s+([A-D])/);
  if (!correctMatch) {
    throw new Error(`Q${qNum}: no correct answer found`);
  }
  const correctAnswer = correctMatch[1].toLowerCase();

  // Per-answer feedback
  // Pattern: **If X selected[ (CORRECT)]:**\n"feedback"
  const feedback: Record<string, string> = {};
  const fbRegex =
    /\*\*If ([A-D]) selected(?: \(CORRECT\))?:\*\*\s*\n([\s\S]*?)(?=\n\n\*\*If [A-D] selected|\n\n---|\n## |$)/g;
  let m: RegExpExecArray | null;
  while ((m = fbRegex.exec(block)) !== null) {
    const letter = m[1].toLowerCase();
    const text = unquote(cleanWhitespace(stripMarkdownLinks(m[2])));
    feedback[letter] = text;
  }
  for (const letter of ["a", "b", "c", "d"]) {
    if (!feedback[letter]) {
      throw new Error(`Q${qNum}: missing feedback for option ${letter}`);
    }
  }

  const out: QuizQuestion = {
    id: `b1-q${qNum}`,
    question,
    options,
    correctAnswer,
    feedback,
  };
  if (imageFile) {
    out.imageSrc = `/quizzes/b1-final/${imageFile}`;
  }
  if (imageAlt) {
    out.imageAlt = imageAlt;
  }
  return out;
}

function main() {
  const content = readFileSync(BANK_PATH, "utf-8");

  // Stop at the implementation-notes appendix
  const stopIdx = content.indexOf("## Implementation Notes for Canvas");
  const body = stopIdx > 0 ? content.slice(0, stopIdx) : content;

  const figmaUrls = loadFigmaUrlsFromQti();
  if (figmaUrls.size !== 25) {
    throw new Error(
      `Expected 25 Figma URLs in QTI, parsed ${figmaUrls.size}`
    );
  }

  // Split on `## Question N:` headers
  const parts = body.split(/\n## Question (\d+): [^\n]+\n/);
  // parts[0] is preamble; then pairs of [number, block]
  const questions: QuizQuestion[] = [];
  for (let i = 1; i < parts.length - 1; i += 2) {
    const qNum = Number.parseInt(parts[i], 10);
    const block = parts[i + 1];
    const q = parseQuestionBlock(qNum, block);
    const figma = figmaUrls.get(qNum);
    if (figma) q.figmaUrl = figma;
    questions.push(q);
  }

  if (questions.length !== 25) {
    throw new Error(`Expected 25 questions, parsed ${questions.length}`);
  }

  const data: QuizData = {
    id: "b1-final-assessment",
    title: "Discover Badge Final Assessment",
    lessonPath: "/badge-1/exam",
    questions,
  };

  writeFileSync(OUT_PATH, JSON.stringify(data, null, 2) + "\n", "utf-8");
  console.log(`Wrote ${questions.length} questions to ${OUT_PATH}`);
}

main();
