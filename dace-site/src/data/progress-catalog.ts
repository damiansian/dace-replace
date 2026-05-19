export type CatalogItem =
  | {
      kind: "quiz";
      id: string;
      label: string;
      href: string;
      /** Defaults to 5 (the standard lesson quiz length). Override for exams. */
      outOf?: number;
      /** When true, the gradebook surfaces instructor-adjusted scores for this quiz. */
      weighted?: boolean;
    }
  | {
      kind: "assignment";
      id: string;
      label: string;
      href: string;
      totalPoints: number;
    };

export type WeekGroup = {
  id: string;
  label: string;
  items: CatalogItem[];
};

export const progressCatalog: WeekGroup[] = [
  {
    id: "week-2",
    label: "Week 2: Color & Forms",
    items: [
      {
        kind: "quiz",
        id: "l03-color",
        label: "L03 Color Quiz",
        href: "/week-2/l03-color/quiz",
      },
      {
        kind: "quiz",
        id: "l04-forms",
        label: "L04 Forms Quiz",
        href: "/week-2/l04-forms/quiz",
      },
      {
        kind: "assignment",
        id: "week-2-practice",
        label: "Applied Practice: Color and Forms Analysis",
        href: "/week-2/applied-practice",
        totalPoints: 24,
      },
    ],
  },
  {
    id: "week-3",
    label: "Week 3: Keyboard & Reflow",
    items: [
      {
        kind: "quiz",
        id: "l05-keyboard",
        label: "L05 Keyboard Quiz",
        href: "/week-3/l05-keyboard/quiz",
      },
      {
        kind: "quiz",
        id: "l06-reflow",
        label: "L06 Reflow Quiz",
        href: "/week-3/l06-reflow/quiz",
      },
      {
        kind: "assignment",
        id: "week-3-practice",
        label: "Applied Practice: Blueline Annotations",
        href: "/week-3/applied-practice",
        totalPoints: 28,
      },
    ],
  },
  {
    id: "week-4",
    label: "Week 4: Landmarks, Navigation & Motion",
    items: [
      {
        kind: "quiz",
        id: "l07-landmarks",
        label: "L07 Landmarks Quiz",
        href: "/week-4/l07-landmarks/quiz",
      },
      {
        kind: "quiz",
        id: "l08-motion",
        label: "L08 Motion Quiz",
        href: "/week-4/l08-motion/quiz",
      },
      {
        kind: "assignment",
        id: "week-4-practice",
        label: "Applied Practice: Navigation Accessibility Audit",
        href: "/week-4/applied-practice",
        totalPoints: 16,
      },
    ],
  },
  {
    id: "badge-1",
    label: "Discover Badge final exam",
    items: [
      {
        kind: "quiz",
        id: "b1-final-assessment",
        label: "Discover Badge Final Assessment",
        href: "/badge-1/exam",
        outOf: 25,
        weighted: true,
      },
    ],
  },
];

export function withToken(href: string, token: string | undefined): string {
  if (!token) return href;
  const sep = href.includes("?") ? "&" : "?";
  return `${href}${sep}t=${encodeURIComponent(token)}`;
}
