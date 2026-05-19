import { notFound } from "next/navigation";
import NorthstarShop from "@/components/northstar-shop/NorthstarShop";
import { PRACTICE_PAGES, type PracticePageId } from "@/data/week4-practice/practice-zones";
import { findStudentByToken } from "@/db/students";
import { withToken } from "@/data/progress-catalog";
import { getResolvedStudentAccessToken } from "@/lib/resolve-student-access-token";

const VALID_PAGES = new Set<PracticePageId>(PRACTICE_PAGES.map((p) => p.id));

interface PageProps {
  params: Promise<{ page: string }>;
  searchParams: Promise<{ t?: string }>;
}

function isPracticePageId(value: string): value is PracticePageId {
  return VALID_PAGES.has(value as PracticePageId);
}

export default async function NorthstarShopPage({ params, searchParams }: PageProps) {
  const { page } = await params;
  if (!isPracticePageId(page)) {
    notFound();
  }

  const { t: queryToken } = await searchParams;
  const token = await getResolvedStudentAccessToken(queryToken);
  const student = await findStudentByToken(token);
  const workbookHref = withToken(
    "/week-4/applied-practice/preview",
    student?.accessToken
  );

  return (
    <NorthstarShop
      pageId={page}
      accessToken={student?.accessToken}
      workbookHref={workbookHref}
    />
  );
}
