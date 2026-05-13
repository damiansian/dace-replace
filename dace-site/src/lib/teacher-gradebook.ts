import { progressCatalog } from "@/data/progress-catalog";
import { assignments } from "@/data/assignments";
import type { InferSelectModel } from "drizzle-orm";
import type { grades, quizResults, students, submissions } from "@/db/schema";

export type StudentRow = InferSelectModel<typeof students>;
export type QuizResultRow = InferSelectModel<typeof quizResults>;
export type SubmissionRow = InferSelectModel<typeof submissions>;
export type GradeRow = InferSelectModel<typeof grades>;

/** All cohort quizzes currently ship with five questions each. */
const QUIZ_OUT_OF = 5;

export type GradebookColumn =
  | {
      kind: "quiz";
      weekLabel: string;
      id: string;
      label: string;
      outOf: number;
    }
  | {
      kind: "assignment";
      weekLabel: string;
      id: string;
      label: string;
      outOf: number;
    };

export type WeekHeader = { weekLabel: string; colspan: number };

export function normalizeName(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, " ");
}

/** First word (given name) for roster ordering; falls back to full trimmed string. */
export function firstNameSortKey(displayName: string): string {
  const t = displayName.trim();
  if (!t) return "";
  const i = t.indexOf(" ");
  return (i === -1 ? t : t.slice(0, i)).toLowerCase();
}

/** Sort primarily by first name, then full display name (case-insensitive). */
export function compareDisplayNamesByFirstName(a: string, b: string): number {
  const fa = firstNameSortKey(a);
  const fb = firstNameSortKey(b);
  if (fa !== fb) return fa.localeCompare(fb);
  return a.trim().toLocaleLowerCase().localeCompare(b.trim().toLowerCase());
}

function orphanKeyFromName(name: string): RosterKey {
  return `o:${normalizeName(name)}` as RosterKey;
}

export function getGradebookColumns(): {
  columns: GradebookColumn[];
  weekHeaders: WeekHeader[];
} {
  const columns: GradebookColumn[] = [];
  const weekHeaders: WeekHeader[] = [];

  for (const week of progressCatalog) {
    let colspan = 0;
    for (const item of week.items) {
      colspan++;
      if (item.kind === "quiz") {
        columns.push({
          kind: "quiz",
          weekLabel: week.label,
          id: item.id,
          label: item.label,
          outOf: QUIZ_OUT_OF,
        });
      } else {
        const fallback = assignments[item.id];
        columns.push({
          kind: "assignment",
          weekLabel: week.label,
          id: item.id,
          label: item.label ?? fallback?.label ?? item.id,
          outOf: item.totalPoints,
        });
      }
    }
    weekHeaders.push({ weekLabel: week.label, colspan });
  }

  return { columns, weekHeaders };
}

export type RosterKey = `s:${number}` | `o:${string}`;

export type RosterIdentity =
  | { key: RosterKey; kind: "student"; id: number; displayName: string }
  | { key: RosterKey; kind: "orphan"; displayName: string };

export type QuizCell =
  | { status: "incomplete" }
  | {
      status: "complete";
      bestScore: number;
      total: number;
      attempts: number;
    };

export type AssignmentCell =
  | { status: "incomplete" }
  | {
      status: "submitted";
      submissionId: number;
      graded: boolean;
      score?: number;
      total?: number;
    };

export type GradebookRowModel = {
  identity: RosterIdentity;
  stripe: boolean;
  quizzes: Map<string, QuizCell>;
  assignments: Map<string, AssignmentCell>;
};

function findStudentForActivity(
  row: { studentId: number | null; name: string },
  byId: Map<number, StudentRow>
): StudentRow | null {
  if (row.studentId != null) {
    return byId.get(row.studentId) ?? null;
  }
  const target = normalizeName(row.name);
  for (const s of byId.values()) {
    if (normalizeName(s.displayName) === target) return s;
  }
  return null;
}

function activityKey(
  row: { studentId: number | null; name: string },
  byId: Map<number, StudentRow>
): RosterKey {
  const st = findStudentForActivity(row, byId);
  if (st) return `s:${st.id}` as RosterKey;
  return orphanKeyFromName(row.name);
}

export function buildGradebookRows(params: {
  students: StudentRow[];
  quizResults: QuizResultRow[];
  submissions: SubmissionRow[];
  gradeMap: Map<number, GradeRow>;
}): GradebookRowModel[] {
  const { students: roster, quizResults: quizRows, submissions: subRows } =
    params;
  const byId = new Map(roster.map((s) => [s.id, s]));

  type AggQuiz = { scores: number[]; totals: number[]; attempts: number };
  const quizAgg = new Map<RosterKey, Map<string, AggQuiz>>();

  const subAgg = new Map<RosterKey, Map<string, SubmissionRow[]>>();

  const orphanLabels = new Map<RosterKey, string>();

  const initQuiz = (key: RosterKey, quizId: string): AggQuiz => {
    let m = quizAgg.get(key);
    if (!m) {
      m = new Map();
      quizAgg.set(key, m);
    }
    let a = m.get(quizId);
    if (!a) {
      a = { scores: [], totals: [], attempts: 0 };
      m.set(quizId, a);
    }
    return a;
  };

  const pushSub = (key: RosterKey, assignmentId: string, row: SubmissionRow) => {
    let m = subAgg.get(key);
    if (!m) {
      m = new Map();
      subAgg.set(key, m);
    }
    let arr = m.get(assignmentId);
    if (!arr) {
      arr = [];
      m.set(assignmentId, arr);
    }
    arr.push(row);
  };

  for (const r of quizRows) {
    const key = activityKey(r, byId);
    if (key.startsWith("o:") && !orphanLabels.has(key)) {
      orphanLabels.set(key, r.name.trim());
    }
    const agg = initQuiz(key, r.quizId);
    agg.scores.push(r.score);
    agg.totals.push(r.total);
    agg.attempts += 1;
  }

  for (const s of subRows) {
    const key = activityKey(s, byId);
    if (key.startsWith("o:") && !orphanLabels.has(key)) {
      orphanLabels.set(key, s.name.trim());
    }
    pushSub(key, s.assignmentId, s);
  }

  const rosterIdentities: RosterIdentity[] = roster
    .slice()
    .sort((a, b) =>
      compareDisplayNamesByFirstName(a.displayName, b.displayName)
    )
    .map((s) => ({
      key: `s:${s.id}` as RosterKey,
      kind: "student" as const,
      id: s.id,
      displayName: s.displayName,
    }));

  const orphanIdentities: RosterIdentity[] = Array.from(orphanLabels.entries())
    .map(([key, displayName]) => ({
      key,
      kind: "orphan" as const,
      displayName,
    }))
    .sort((a, b) =>
      compareDisplayNamesByFirstName(a.displayName, b.displayName)
    );

  let identities: RosterIdentity[] = [...rosterIdentities, ...orphanIdentities];

  if (identities.length === 0) {
    const fallback = new Map<string, string>();
    for (const r of quizRows) {
      const n = normalizeName(r.name);
      if (!fallback.has(n)) fallback.set(n, r.name.trim());
    }
    for (const s of subRows) {
      const n = normalizeName(s.name);
      if (!fallback.has(n)) fallback.set(n, s.name.trim());
    }
    identities = Array.from(fallback.entries())
      .sort((a, b) => compareDisplayNamesByFirstName(a[1], b[1]))
      .map(([norm, displayName]) => ({
        key: `o:${norm}` as RosterKey,
        kind: "orphan" as const,
        displayName,
      }));
  }

  const { columns } = getGradebookColumns();

  return identities.map((identity, index) => {
    const quizzes = new Map<string, QuizCell>();
    const assignmentCells = new Map<string, AssignmentCell>();

    for (const col of columns) {
      if (col.kind === "quiz") {
        const agg = quizAgg.get(identity.key)?.get(col.id);
        if (!agg || agg.attempts === 0) {
          quizzes.set(col.id, { status: "incomplete" });
        } else {
          const total = Math.max(...agg.totals, col.outOf);
          const bestScore = Math.max(...agg.scores);
          quizzes.set(col.id, {
            status: "complete",
            bestScore,
            total,
            attempts: agg.attempts,
          });
        }
      } else {
        const list = subAgg.get(identity.key)?.get(col.id);
        if (!list || list.length === 0) {
          assignmentCells.set(col.id, { status: "incomplete" });
        } else {
          const latest = list
            .slice()
            .sort(
              (a, b) =>
                b.submittedAt.getTime() - a.submittedAt.getTime()
            )[0];
          const grade = params.gradeMap.get(latest.id);
          if (grade) {
            assignmentCells.set(col.id, {
              status: "submitted",
              submissionId: latest.id,
              graded: true,
              score: grade.score,
              total: grade.total,
            });
          } else {
            assignmentCells.set(col.id, {
              status: "submitted",
              submissionId: latest.id,
              graded: false,
            });
          }
        }
      }
    }

    return {
      identity,
      stripe: index % 2 === 1,
      quizzes,
      assignments: assignmentCells,
    };
  });
}
