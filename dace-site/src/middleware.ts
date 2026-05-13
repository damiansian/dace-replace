import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isWellFormedToken } from "@/lib/access-token-format";
import {
  DACE_PATHNAME_HEADER,
  STUDENT_ACCESS_COOKIE_MAX_AGE,
  STUDENT_ACCESS_TOKEN_COOKIE,
  STUDENT_ACCESS_TOKEN_HEADER,
} from "@/lib/student-session";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(DACE_PATHNAME_HEADER, pathname);

  const t = request.nextUrl.searchParams.get("t");
  if (isWellFormedToken(t)) {
    requestHeaders.set(STUDENT_ACCESS_TOKEN_HEADER, t);
  }

  const res = NextResponse.next({ request: { headers: requestHeaders } });

  const skipCookie =
    pathname.startsWith("/teacher") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next");

  if (!skipCookie && isWellFormedToken(t)) {
    res.cookies.set(STUDENT_ACCESS_TOKEN_COOKIE, t, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: STUDENT_ACCESS_COOKIE_MAX_AGE,
    });
  }

  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|gif|webp|svg)$).*)",
  ],
};
