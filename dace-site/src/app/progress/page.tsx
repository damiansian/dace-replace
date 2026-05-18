import { redirect } from "next/navigation";

export const metadata = {
  title: "My Progress | DACE Cohort 2",
  robots: "noindex, nofollow",
};

interface ProgressPageProps {
  searchParams: Promise<{ t?: string }>;
}

export default async function ProgressPage({ searchParams }: ProgressPageProps) {
  const { t } = await searchParams;
  redirect(t ? `/?t=${encodeURIComponent(t)}` : "/");
}
