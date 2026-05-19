import { redirect } from "next/navigation";
import { withToken } from "@/data/progress-catalog";
import { getResolvedStudentAccessToken } from "@/lib/resolve-student-access-token";

interface PageProps {
  searchParams: Promise<{ t?: string }>;
}

export default async function NorthstarShopIndex({ searchParams }: PageProps) {
  const { t: queryToken } = await searchParams;
  const token = await getResolvedStudentAccessToken(queryToken);
  redirect(withToken("/week-4/applied-practice/northstar-shop/home", token));
}
