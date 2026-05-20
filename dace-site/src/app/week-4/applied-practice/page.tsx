import Week4PracticeWorkbook from "@/components/week4-practice/Week4PracticeWorkbook";
import { findStudentByToken } from "@/db/students";
import { getResolvedStudentAccessToken } from "@/lib/resolve-student-access-token";

export const metadata = {
  title: "Week 4 Applied Practice | DACE Cohort 2",
};

interface PageProps {
  searchParams: Promise<{ t?: string }>;
}

export default async function Week4PracticePage({
  searchParams,
}: PageProps) {
  const { t: queryToken } = await searchParams;
  const token = await getResolvedStudentAccessToken(queryToken);
  const student = await findStudentByToken(token);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <Week4PracticeWorkbook
        accessToken={student?.accessToken}
        studentDisplayName={student?.displayName}
        previewMode={false}
      />
    </div>
  );
}
