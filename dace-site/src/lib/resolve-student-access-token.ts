import { cookies, headers } from "next/headers";
import { isWellFormedToken } from "@/lib/access-token-format";
import {
  STUDENT_ACCESS_TOKEN_COOKIE,
  STUDENT_ACCESS_TOKEN_HEADER,
} from "@/lib/student-session";

/**
 * Resolves the personal access token for this request.
 * Precedence: explicit query token (from page searchParams), then middleware
 * header (when `?t=` was on the URL this request), then HttpOnly cookie.
 */
export async function getResolvedStudentAccessToken(
  queryToken: string | undefined | null
): Promise<string | undefined> {
  if (isWellFormedToken(queryToken)) return queryToken;

  const headersList = await headers();
  const fromHeader = headersList.get(STUDENT_ACCESS_TOKEN_HEADER);
  if (isWellFormedToken(fromHeader)) return fromHeader;

  const jar = await cookies();
  const fromCookie = jar.get(STUDENT_ACCESS_TOKEN_COOKIE)?.value;
  if (isWellFormedToken(fromCookie)) return fromCookie;

  return undefined;
}
