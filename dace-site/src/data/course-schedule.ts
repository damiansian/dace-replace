import { formatClassDueDate } from "@/data/course-home-catalog";

export type BadgeLevel = "prep" | "discover" | "define" | "deliver";

export type ScheduleRowKind =
  | "prep"
  | "session"
  | "break"
  | "assessment"
  | "study";

export type ScheduleRow = {
  id: string;
  weekLabel: string;
  /** Human-readable date or range for the table */
  dateDisplay: string;
  /** ISO date for live sessions (used with &lt;time&gt;) */
  sessionDate?: string;
  modules: string;
  topics?: string;
  kind: ScheduleRowKind;
  level: BadgeLevel;
  /** When set, show Discover Badge week completion from the student site */
  progressWeekId?: "week-2" | "week-3" | "week-4";
};

export type ScheduleSection = {
  id: string;
  title: string;
  subtitle: string;
  level: BadgeLevel;
  dateRange: string;
  rows: ScheduleRow[];
};

export const attendancePolicy =
  "Attendance is mandatory. A maximum of one (1) absence is allowed during each level of the course (3 absences total).";

export const holidayAdjustments = [
  {
    title: "Summer break",
    detail: "No coursework June 29 through July 10.",
  },
  {
    title: "Design Summit",
    detail: "No coursework August 3 through August 7.",
  },
  {
    title: "Eid al-Adha",
    detail: "May 27 session shifted to May 28.",
  },
] as const;

function session(
  id: string,
  weekLabel: string,
  iso: string,
  modules: string,
  level: BadgeLevel,
  options?: {
    topics?: string;
    kind?: ScheduleRowKind;
    progressWeekId?: ScheduleRow["progressWeekId"];
  }
): ScheduleRow {
  return {
    id,
    weekLabel,
    dateDisplay: formatClassDueDate(iso),
    sessionDate: iso,
    modules,
    topics: options?.topics,
    kind: options?.kind ?? "session",
    level,
    progressWeekId: options?.progressWeekId,
  };
}

export const courseScheduleSections: ScheduleSection[] = [
  {
    id: "prep",
    title: "Pre-read and prep",
    subtitle: "Before Level One",
    level: "prep",
    dateRange: "April 1 to April 27, 2026",
    rows: [
      {
        id: "prep",
        weekLabel: "Prep",
        dateDisplay: "Apr 1 – Apr 27, 2026",
        modules: "Async pre-read (~3 hrs)",
        kind: "prep",
        level: "prep",
      },
    ],
  },
  {
    id: "level-one",
    title: "Level One",
    subtitle: "Discover Badge — Testing Foundation",
    level: "discover",
    dateRange: "April 28 to May 26, 2026",
    rows: [
      session("week-1", "Week 1", "2026-04-28", "L01, L02", "discover", {
        topics: "Accessible Names; Headings",
      }),
      session("week-2", "Week 2", "2026-05-05", "L03, L04", "discover", {
        topics: "Color; Forms and Errors",
        progressWeekId: "week-2",
      }),
      session("week-3", "Week 3", "2026-05-12", "L05, L06", "discover", {
        topics: "Keyboard, Touch and Reading Order; Reflow and Zoom",
        progressWeekId: "week-3",
      }),
      session("week-4", "Week 4", "2026-05-19", "L07, L08", "discover", {
        topics: "Landmarks and Navigation; Motion",
        progressWeekId: "week-4",
      }),
      session("week-5", "Week 5", "2026-05-26", "Badge 1", "discover", {
        topics: "Discover Badge assessment",
        kind: "assessment",
      }),
    ],
  },
  {
    id: "level-two",
    title: "Level Two",
    subtitle: "Define Badge — Assistive Technology Expertise",
    level: "define",
    dateRange: "May 27 to July 14, 2026 (with summer break)",
    rows: [
      session("week-6", "Week 6", "2026-06-02", "01, 02", "define", {
        topics: "DOM and Accessibility Tree; Screen Reader Fundamentals",
      }),
      session("week-7", "Week 7", "2026-06-09", "03, 04", "define", {
        topics: "Screen Reader Navigation; Screen Magnification",
      }),
      session("week-8", "Week 8", "2026-06-16", "05, 06", "define", {
        topics: "Voice Control; Windows High Contrast",
      }),
      session("week-9", "Week 9", "2026-06-23", "07, 08", "define", {
        topics: "User Preferences; Perceptual and Cognitive Design",
      }),
      {
        id: "break-summer-1",
        weekLabel: "Break",
        dateDisplay: formatClassDueDate("2026-06-30"),
        sessionDate: "2026-06-30",
        modules: "—",
        topics: "Summer break — no session",
        kind: "break",
        level: "define",
      },
      {
        id: "break-summer-2",
        weekLabel: "Break",
        dateDisplay: formatClassDueDate("2026-07-07"),
        sessionDate: "2026-07-07",
        modules: "—",
        topics: "Summer break — no session",
        kind: "break",
        level: "define",
      },
      session("week-10", "Week 10", "2026-07-14", "Badge 2", "define", {
        topics: "Define Badge assessment",
        kind: "assessment",
      }),
    ],
  },
  {
    id: "level-three",
    title: "Level Three",
    subtitle: "Deliver Badge — Independent Review and Leadership",
    level: "deliver",
    dateRange: "July 15 to August 24, 2026 (with Design Summit break)",
    rows: [
      session("week-11", "Week 11", "2026-07-21", "01, 02", "deliver", {
        topics: "Independent Review Methodology; Component Patterns",
      }),
      session("week-12", "Week 12", "2026-07-28", "03, 04", "deliver", {
        topics: "Feedback Frameworks; Complex Scenarios",
      }),
      {
        id: "break-summit",
        weekLabel: "Break",
        dateDisplay: formatClassDueDate("2026-08-04"),
        sessionDate: "2026-08-04",
        modules: "—",
        topics: "Design Summit — no session",
        kind: "break",
        level: "deliver",
      },
      session("week-13", "Week 13", "2026-08-11", "05, 06", "deliver", {
        topics: "Product Team POV; Organizational Impact",
      }),
      session("week-14", "Week 14", "2026-08-18", "Study", "deliver", {
        topics: "Assessment preparation",
        kind: "study",
      }),
      session("week-15", "Week 15", "2026-08-24", "Badge 3 / Cert", "deliver", {
        topics: "DACE credential assessment",
        kind: "assessment",
      }),
    ],
  },
];

/** Flat list of all schedule rows for the home page sidebar. */
export function flattenCourseSchedule(): ScheduleRow[] {
  return courseScheduleSections.flatMap((section) => section.rows);
}

export const levelExpectations = [
  {
    level: "Level One",
    time: "~1.5 hours in person and ~1.5 hours outside of class per week.",
    note: "Discover Badge assessment at end of phase. Level Two syllabus provided after passing.",
  },
  {
    level: "Level Two",
    time: "~1.5 hours in person and ~1.5 hours outside of class per week.",
    note: "Define Badge assessment at end of phase (includes summer break). Level Three syllabus provided after passing.",
  },
  {
    level: "Level Three",
    time: "~1.5 hours in person plus 1–2 hours for Blueline annotation sessions per week.",
    note: "You may join other teams' sessions if none are scheduled for yours. DACE credential issued August 24 contingent on passing all three assessments.",
  },
] as const;
