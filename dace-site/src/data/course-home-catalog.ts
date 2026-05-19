export type HomeLesson = {
  progressId: string;
  lessonLabel: string;
  lessonHref: string;
  quizLabel: string;
  quizHref: string;
};

export type ClassRecordingLink = {
  href: string;
  label: string;
};

export type HomeWeek = {
  weekId: "week-2" | "week-3" | "week-4";
  weekLabel: string;
  weekTitle: string;
  weekHref: string;
  /** Class week date from the course syllabus (Discover Badge schedule). */
  syllabusClassDate: string;
  classDueDate: string;
  /** Live session recording (shared OneDrive / SharePoint link). */
  classRecording?: ClassRecordingLink;
  lessons: [HomeLesson, HomeLesson];
  appliedSkill: {
    progressId: string;
    title: string;
    href: string;
  };
};

/** Week 4 live session (May 19, 2026) — cohort-shared OneDrive folder. */
export const week4ClassRecording: ClassRecordingLink = {
  href: "https://adobe-my.sharepoint.com/:v:/r/personal/dsian_adobe_com/Documents/Share%20folders/DACE-Cohort-2-2026/Week%204/week-4-meeting-recording-2-of-2.mp4?csf=1&web=1&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=nbpY5w",
  label: "Class recording",
};

export function formatClassDueDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export const courseHomeCatalog: HomeWeek[] = [
  {
    weekId: "week-2",
    weekLabel: "Week 2",
    weekTitle: "Color & Forms",
    weekHref: "/week-2",
    syllabusClassDate: "2026-05-05",
    classDueDate: "2026-05-12",
    lessons: [
      {
        progressId: "l03-color",
        lessonLabel: "L03: Color",
        lessonHref: "/week-2/l03-color",
        quizLabel: "L03 quiz",
        quizHref: "/week-2/l03-color/quiz",
      },
      {
        progressId: "l04-forms",
        lessonLabel: "L04: Forms & Errors",
        lessonHref: "/week-2/l04-forms",
        quizLabel: "L04 quiz",
        quizHref: "/week-2/l04-forms/quiz",
      },
    ],
    appliedSkill: {
      progressId: "week-2-practice",
      title: "Week 2 applied skill",
      href: "/week-2/applied-practice",
    },
  },
  {
    weekId: "week-3",
    weekLabel: "Week 3",
    weekTitle: "Keyboard & Reflow",
    weekHref: "/week-3",
    syllabusClassDate: "2026-05-12",
    classDueDate: "2026-05-19",
    lessons: [
      {
        progressId: "l05-keyboard",
        lessonLabel: "L05: Keyboard & Touch",
        lessonHref: "/week-3/l05-keyboard",
        quizLabel: "L05 quiz",
        quizHref: "/week-3/l05-keyboard/quiz",
      },
      {
        progressId: "l06-reflow",
        lessonLabel: "L06: Reflow & Zoom",
        lessonHref: "/week-3/l06-reflow",
        quizLabel: "L06 quiz",
        quizHref: "/week-3/l06-reflow/quiz",
      },
    ],
    appliedSkill: {
      progressId: "week-3-practice",
      title: "Week 3 applied skill",
      href: "/week-3/applied-practice",
    },
  },
  {
    weekId: "week-4",
    weekLabel: "Week 4",
    weekTitle: "Landmarks, Navigation & Motion",
    weekHref: "/week-4",
    syllabusClassDate: "2026-05-19",
    classDueDate: "2026-05-26",
    classRecording: week4ClassRecording,
    lessons: [
      {
        progressId: "l07-landmarks",
        lessonLabel: "L07: Landmarks & Navigation",
        lessonHref: "/week-4/l07-landmarks",
        quizLabel: "L07 quiz",
        quizHref: "/week-4/l07-landmarks/quiz",
      },
      {
        progressId: "l08-motion",
        lessonLabel: "L08: Motion & Animation",
        lessonHref: "/week-4/l08-motion",
        quizLabel: "L08 quiz",
        quizHref: "/week-4/l08-motion/quiz",
      },
    ],
    appliedSkill: {
      progressId: "week-4-practice",
      title: "Week 4 applied skill",
      href: "/week-4/applied-practice",
    },
  },
];
