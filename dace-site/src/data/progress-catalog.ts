export type CatalogItem =
  | {
      kind: "quiz";
      id: string;
      label: string;
      href: string;
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
];

export function withToken(href: string, token: string | undefined): string {
  if (!token) return href;
  const sep = href.includes("?") ? "&" : "?";
  return `${href}${sep}t=${encodeURIComponent(token)}`;
}
